import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    const prompt = `Topic: "${topic}". Write 3 viral tweets. 
    Styles: One strong opinion/controversial, one advice/listicle, one curious/question.
    Format: JSON array of strings named "tweets".`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    const parsed = JSON.parse(completion.choices[0].message.content || '{"tweets": []}');
    return NextResponse.json(parsed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
