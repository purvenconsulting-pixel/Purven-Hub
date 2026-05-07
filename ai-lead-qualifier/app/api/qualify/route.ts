import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phone, message, businessConfig } = await request.json();

    if (!phone || !message) {
      return NextResponse.json({ error: 'Phone and message are required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const questions = businessConfig?.questions || [
      'What is your budget?',
      'What is your timeline?',
      'Are you the decision maker?',
    ];

    const criteria = businessConfig?.criteria || {
      minBudget: 1000,
      maxTimeline: 90,
      requireDecisionMaker: true,
    };

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a lead qualification AI. Analyze the lead's message and extract:
1. Budget (number or null)
2. Timeline (string)
3. Is decision maker (boolean)
4. Pain points mentioned (array of strings)
5. Lead score 0-100 based on:
   - Budget >= $${criteria.minBudget}: +30 points
   - Timeline within ${criteria.maxTimeline} days: +25 points
   - Decision maker: +25 points
   - Clear pain points: +20 points
6. Status: "qualified" (score >= 70), "contacted" (score 40-69), or "unqualified" (score < 40)
7. Suggested next action
8. A friendly bot response to send back

Return ONLY valid JSON with this exact shape:
{
  "score": number,
  "status": "qualified" | "contacted" | "unqualified",
  "qualificationData": {
    "budget": string | null,
    "timeline": string,
    "decisionMaker": boolean,
    "painPoints": string[]
  },
  "nextAction": string,
  "suggestedResponse": string
}`,
          },
          {
            role: 'user',
            content: `Lead message: "${message}"`,
          },
        ],
        temperature: 0.3,
        max_tokens: 500,
        response_format: { type: 'json_object' },
      }),
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      console.error('OpenAI error:', err);
      return NextResponse.json(
        { error: 'Failed to analyze lead with AI' },
        { status: 502 }
      );
    }

    const data = await openaiRes.json();
    const raw = data.choices?.[0]?.message?.content;
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { error: 'Invalid AI response format' },
        { status: 502 }
      );
    }

    const result = {
      lead: {
        phone,
        score: parsed.score ?? 0,
        status: parsed.status ?? 'unqualified',
        qualificationData: parsed.qualificationData ?? {},
      },
      nextAction: parsed.nextAction ?? 'Follow up manually',
      suggestedResponse: parsed.suggestedResponse ?? 'Thanks for reaching out!',
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to qualify lead' },
      { status: 500 }
    );
  }
}
