import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { product } = await req.json();
    const prompt = `Product details: "${product}". Write 3 persuasive product descriptions. 
    Styles: One emotional/storytelling, one benefits-led/concise, one feature-rich/SEO.
    Format: JSON array of strings named "descriptions".`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    const parsed = JSON.parse(completion.choices[0].message.content || '{"descriptions": []}');
    return NextResponse.json(parsed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
