import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { review, businessName, tone } = await request.json();

    if (!review || review.trim().length === 0) {
      return NextResponse.json({ error: 'Review is required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompts: Record<string, string> = {
      professional: 'You are a professional business owner. Write a polite, professional response to a customer review. Acknowledge their feedback, thank them, and invite them back.',
      friendly: 'You are a friendly business owner. Write a warm, personable response to a customer review. Use a conversational tone, show personality, and make them feel appreciated.',
      apologetic: 'You are a business owner responding to a negative review. Write a sincere, apologetic response. Acknowledge the issue, apologize sincerely, explain how you will fix it, and offer to make it right.',
      grateful: 'You are an enthusiastic business owner. Write an excited, grateful response to a positive review. Show genuine appreciation and enthusiasm.',
      concise: 'You are a busy business owner. Write a brief, concise response to a review. Keep it under 50 words.',
    };

    const userPrompt = businessName
      ? `Business name: ${businessName}\n\nCustomer review: "${review}"`
      : `Customer review: "${review}"`;

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompts[tone] || systemPrompts.professional },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      console.error('OpenAI error:', err);
      return NextResponse.json(
        { error: 'Failed to generate response from AI' },
        { status: 502 }
      );
    }

    const data = await openaiRes.json();
    const generatedResponse = data.choices?.[0]?.message?.content?.trim() || '';

    return NextResponse.json({ response: generatedResponse });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
