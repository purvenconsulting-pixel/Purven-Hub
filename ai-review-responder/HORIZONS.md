# Deploy to Hostinger Horizons

## What is Horizons?
Hostinger Horizons is a no-code AI platform that builds and hosts web apps. You describe what you want in English, and it generates the code, database, and hosting.

## Deployment Steps

### 1. Sign Up
- Go to https://www.hostinger.com/horizons
- Choose a plan (Starter $13.99/mo recommended for custom domain)

### 2. Create New Project
Click "Create New Project" and paste this prompt:

```
Build an AI Review Responder web app with these features:

FRONTEND:
- Clean, modern landing page with headline "AI Review Responder - Generate perfect responses to customer reviews in seconds"
- Input form with:
  * Business name text field
  * Large textarea for pasting customer reviews
  * Dropdown for tone selection: Professional, Friendly, Apologetic, Grateful, Concise
  * "Generate Response" button
- Results section showing the AI-generated response with Copy and Regenerate buttons
- Pricing section showing: Free (5/day), Pro $29/mo (unlimited), Business $79/mo (team features)
- Simple navigation: Home, Pricing, Login

BACKEND:
- API endpoint /api/generate that receives {review, businessName, tone} and returns AI-generated response
- Integration with OpenAI GPT-4 API for response generation
- User authentication (simple email/password)
- Usage tracking (count free responses per day)
- Stripe integration for Pro/Business subscriptions

DESIGN:
- Clean white/blue color scheme
- Mobile responsive
- Fast loading (< 2 seconds)
- Professional, trustworthy feel (for business owners)
```

### 3. Add Integrations
After the base app is built:

**OpenAI Integration:**
- Go to Settings > Integrations
- Add OpenAI API key
- Configure GPT-4 model

**Stripe Payments:**
- Go to Settings > Payments
- Connect Stripe account
- Create products: Pro ($29/mo), Business ($79/mo)

**Custom Domain:**
- Go to Settings > Domain
- Connect your domain or use free Hostinger subdomain

### 4. Test & Launch
- Test the review response generation
- Verify payment flow
- Click "Publish" to go live

## Alternative: Manual Upload
If Horizons supports code upload:
1. Export your project from Horizons
2. Replace with our Next.js code from `/home/ubuntu/projects/ai-review-responder/`
3. Re-deploy

## Current Code Reference
Our built code is at: `/home/ubuntu/projects/ai-review-responder/`
- Next.js 14 + TypeScript + Tailwind
- Static export ready
- API routes for OpenAI integration

## OpenAI API Key Setup
The app requires an OpenAI API key to generate real AI responses.

**How to add it:**
1. Get your API key from https://platform.openai.com/api-keys
2. In Hostinger Horizons, go to Settings > Environment Variables
3. Add: `OPENAI_API_KEY=your_key_here`
4. Redeploy the app

**Without the API key:** The app will show an error message asking you to configure it.

## Post-Deploy Checklist
- [ ] Add OPENAI_API_KEY environment variable
- [ ] Test generating a response
- [ ] Connect Stripe for payments
- [ ] Set up custom domain (reviewresponder.purvenhub.com)
- [ ] Configure usage limits for free plan
