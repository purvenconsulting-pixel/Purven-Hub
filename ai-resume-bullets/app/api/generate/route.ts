import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { jobTitle, responsibilities, tone } = await req.json();

    if (!jobTitle || !responsibilities) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `You are an expert resume writer. Transform the following job responsibilities into 4 high-impact, achievement-oriented resume bullet points for a ${jobTitle} position. 
    Use the ${tone} tone. 
    Each bullet should start with a strong action verb and, where possible, include metrics or specific outcomes.
    
    Responsibilities to transform:
    ${responsibilities}
    
    Return only a JSON array of strings.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that returns only valid JSON arrays." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content || '{"bullets": []}';
    const parsed = JSON.parse(content);
    
    // Support both { bullets: [] } and naked arrays
    const finalBullets = Array.isArray(parsed) ? parsed : (parsed.bullets || []);

    return NextResponse.json({ bullets: finalBullets });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
