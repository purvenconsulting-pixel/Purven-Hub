# AI Review Responder

Generate perfect responses to customer reviews in seconds.

## Features

- Paste any customer review (Google, Yelp, Amazon, etc.)
- Choose response tone: Professional, Friendly, Apologetic, Grateful, Concise
- Auto-generates personalized responses
- One-click copy to clipboard

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI API (GPT-4)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=sk-...
```

3. Run locally:
```bash
npm run dev
```

## Deployment

Deploy to Vercel:
```bash
vercel --prod
```

## Monetization

- Free: 5 responses/day
- Pro: $29/mo unlimited responses
- Business: $79/mo unlimited + team features

## Next Features

- [ ] Multi-language support
- [ ] Bulk upload (CSV of reviews)
- [ ] Integration with Google Business API
- [ ] Team collaboration
- [ ] Response history & analytics
