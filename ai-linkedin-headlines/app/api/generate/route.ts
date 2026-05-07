import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { profile } = await req.json();
    const prompt = `Based on this professional background: "${profile}", generate 5 unique, eye-catching, and SEO-optimized LinkedIn headlines. 
    Mix styles: one keyword-heavy, one achievement-based, one conversational, and one visionary. 
    Format: JSON array of strings named "headlines".`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    const parsed = JSON.parse(completion.choices[0].message.content || '{"headlines": []}');
    return NextResponse.json(parsed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
