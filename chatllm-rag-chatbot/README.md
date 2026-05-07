# ChatLLM RAG Chatbot

A RAG (Retrieval-Augmented Generation) chatbot built from the ChatLLM Teams documentation at https://abacus.ai/help/chatllm-ai-super-assistant/introduction.

## Features

- **Full documentation ingestion** — All help pages scraped and chunked into a searchable knowledge base
- **Keyword-based retrieval** — Finds the most relevant documentation chunks for any user query
- **Grounded answers** — Uses OpenAI to generate answers strictly from retrieved context
- **Honest fallback** — Says "I couldn't find the answer" when the docs don't cover the question
- **Source citations** — Every answer includes links back to the original documentation
- **Clean UI** — Modern chat interface built with Next.js + Tailwind CSS

## Tech Stack

- Next.js 14 (static export)
- TypeScript
- Tailwind CSS
- OpenAI API
- Custom keyword-based RAG retrieval

## Setup

1. Install dependencies:
```bash
cd /home/ubuntu/projects/chatllm-rag-chatbot
npm install
```

2. Configure environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local and add your OpenAI API key
```

3. Build for static export:
```bash
npm run build
```

4. The static site will be in the `dist/` folder, ready to deploy to any static host (Hostinger Horizons, Vercel, Netlify, etc.).

## How It Works

1. **Knowledge Base** — All documentation is embedded as structured chunks in `lib/knowledge-base.ts`
2. **Retrieval** — When a user asks a question, the system scores each chunk by keyword overlap
3. **Augmentation** — Top 5 most relevant chunks are injected into the LLM prompt as context
4. **Generation** — OpenAI generates an answer using ONLY the provided context
5. **Fallback** — If no relevant chunks are found, the bot admits it doesn't know

## Documentation Coverage

The knowledge base includes all major sections:
- Introduction & Overview
- Prompting Tips and Tricks
- General FAQs
- Toolbar and LLM Configuration
- Connectors
- Abacus AI Agent (DeepAgent)
- Agent Tasks
- Pricing & Credits
- MCP Servers
- App Deployment & Custom Domains
- Abacus Claw
- Agent Skills
- Abacus AI Desktop (CLI, VS Code, CoWork)
- Abacus AI Listener
- Domain Purchasing

## Customization

To add more documentation:
1. Add new chunks to `lib/knowledge-base.ts`
2. Rebuild and redeploy

To switch to a vector database (for larger docs):
1. Replace `retrieveRelevantChunks()` with a call to Pinecone, Weaviate, or similar
2. Keep the same chunk structure
