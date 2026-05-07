# AI Lead Qualifier

Auto-qualify leads via WhatsApp and SMS before they reach your sales team.

## Features

- WhatsApp Business API integration
- AI-powered qualification scoring
- Auto-book meetings for qualified leads
- Dashboard with lead pipeline
- Custom qualification questions & criteria

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI API (GPT-4)
- WhatsApp Business API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add environment variables to `.env.local`:
```
OPENAI_API_KEY=sk-...
WHATSAPP_API_TOKEN=...
WHATSAPP_PHONE_NUMBER_ID=...
WHATSAPP_VERIFY_TOKEN=...
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

3. Run locally:
```bash
npm run dev
```

## WhatsApp Setup

1. Create a Meta Developer account
2. Set up WhatsApp Business API
3. Configure webhook URL: `https://your-app.vercel.app/api/webhook/whatsapp`
4. Verify token matches `WHATSAPP_VERIFY_TOKEN`

## Deployment

Deploy to Vercel:
```bash
vercel --prod
```

## Monetization

- Starter: $49/mo (100 leads)
- Pro: $149/mo (unlimited leads + team)
- Enterprise: Custom (API access + white-label)

## Next Features

- [ ] SMS integration (Twilio)
- [ ] Calendar integration (Calendly/Google)
- [ ] CRM integrations (HubSpot, Salesforce)
- [ ] AI conversation memory
- [ ] Multi-language support
