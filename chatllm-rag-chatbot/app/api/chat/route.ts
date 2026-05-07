import { NextRequest } from "next/server";
import OpenAI from "openai";
import { retrieveRelevantChunks } from "@/lib/knowledge-base";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  baseURL: process.env.OPENAI_BASE_URL || "https://api.openai.com/v1",
});

const SYSTEM_PROMPT = `You are a helpful support assistant for ChatLLM Teams (also known as Abacus.AI Super Assistant). You answer user questions based ONLY on the provided documentation context.

Rules:
1. Answer using ONLY the information from the provided context chunks.
2. If the context does not contain enough information to answer the question, say: "I couldn't find the answer to that in the ChatLLM documentation. Try rephrasing your question or contact support@abacus.ai for help."
3. Be concise but thorough. Use bullet points for lists when appropriate.
4. Always cite the source section at the end of your answer.
5. Do not make up information that is not in the context.
6. If asked about pricing, credits, or costs, be precise with the numbers from the context.
7. If asked about steps or how-to instructions, list them clearly in order.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage?.content || "";

    // Retrieve relevant chunks
    const relevantChunks = retrieveRelevantChunks(userQuery, 5);

    // Build context string
    let contextStr = "";
    if (relevantChunks.length > 0) {
      contextStr = relevantChunks
        .map(
          (chunk, i) =>
            `[${i + 1}] **${chunk.title}** (Section: ${chunk.section})\n${chunk.content}\nSource: ${chunk.source}`
        )
        .join("\n\n---\n\n");
    } else {
      contextStr = "No relevant documentation found for this query.";
    }

    const augmentedMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "system",
        content: `Here is the relevant documentation context:\n\n${contextStr}\n\nAnswer the user's question using ONLY the above context.`,
      },
      ...messages,
    ];

    const response = await openai.chat.completions.create({
      model: process.env.MODEL_NAME || "gpt-4o-mini",
      messages: augmentedMessages as any,
      temperature: 0.3,
      max_tokens: 1500,
    });

    const answer = response.choices[0]?.message?.content || "No response generated.";

    return new Response(JSON.stringify({ answer, sources: relevantChunks }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process your request. Please try again.",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
