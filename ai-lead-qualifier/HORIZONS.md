# Deploy to Hostinger Horizons

## What is Horizons?
Hostinger Horizons is a no-code AI platform that builds and hosts web apps. You describe what you want in English, and it generates the code, database, and hosting.

## Deployment Steps

### 1. Sign Up
- Go to https://www.hostinger.com/horizons
- Choose a plan (Starter $13.99/mo recommended for custom domain + more AI credits)

### 2. Create New Project
Click "Create New Project" and paste this prompt:

```
Build an AI Lead Qualifier SaaS dashboard with these features:

FRONTEND:
- Dashboard with stats cards showing: Total Leads, Qualified Leads, Conversion Rate, Time Saved
- Leads table with columns: Name, Phone, Source (WhatsApp/SMS/Website), Status (New/Qualified/Unqualified/Contacted), Score (0-100), Notes, Date
- Bot Setup panel with:
  * Checkboxes for qualification questions (Budget, Timeline, Decision Maker, Pain Point)
  * Input fields for criteria (Min Budget, Max Timeline days, Auto-book threshold score)
  * Save/Cancel buttons
- WhatsApp Integration section with "Connect WhatsApp" button and documentation link
- Navigation: Dashboard, Leads, Settings, Billing

BACKEND:
- API endpoint /api/qualify that receives {phone, message} and returns lead score + status
- AI-powered qualification using OpenAI GPT-4 to analyze responses
- Scoring logic: Budget (30pts), Timeline (25pts), Decision Maker (25pts), Pain Point (20pts)
- Auto-status: Qualified (≥70), Contacted (40-69), Unqualified (<40)
- Webhook endpoint /api/webhook/whatsapp for WhatsApp Business API integration
- User authentication and team management
- Stripe billing integration

DATABASE:
- Leads table: id, name, phone, source, status, score, notes, qualification_data, created_at
- Users table: id, email, plan (starter/pro/enterprise), lead_count, settings
- Conversations table: lead_id, message, response, timestamp

DESIGN:
- Clean, professional dashboard design
- Green/yellow/red color coding for lead scores
- Mobile responsive sidebar
- Fast, snappy interactions
```

### 3. Add Integrations
After the base app is built:

**OpenAI Integration:**
- Go to Settings > Integrations
- Add OpenAI API key
- Configure GPT-4 for lead qualification

**WhatsApp Business API:**
- Go to Settings > Integrations > WhatsApp
- Follow Meta Developer setup steps
- Configure webhook URL: your-app.com/api/webhook/whatsapp
- Add verify token

**Stripe Payments:**
- Go to Settings > Payments
- Connect Stripe account
- Create products: Starter ($49/mo), Pro ($149/mo), Enterprise (custom)

**SMS (Optional - Twilio):**
- Go to Settings > Integrations
- Add Twilio credentials for SMS lead qualification

### 4. Test & Launch
- Send test WhatsApp message to verify qualification flow
- Check lead scoring accuracy
- Test payment flow
- Click "Publish" to go live

## Alternative: Manual Upload
If Horizons supports code upload:
1. Export your project from Horizons
2. Replace with our Next.js code from `/home/ubuntu/projects/ai-lead-qualifier/`
3. Re-deploy

## Current Code Reference
Our built code is at: `/home/ubuntu/projects/ai-lead-qualifier/`
- Next.js 14 + TypeScript + Tailwind
- Static export ready
- API routes for qualification logic
- WhatsApp webhook handler

## OpenAI API Key Setup
The app requires an OpenAI API key for AI-powered lead qualification.

**How to add it:**
1. Get your API key from https://platform.openai.com/api-keys
2. In Hostinger Horizons, go to Settings > Environment Variables
3. Add: `OPENAI_API_KEY=your_key_here`
4. Redeploy the app

**Without the API key:** The app will show an error message asking you to configure it.

## Post-Deploy Checklist
- [ ] Add OPENAI_API_KEY environment variable
- [ ] Test lead qualification with sample message
- [ ] Connect Stripe for payments
- [ ] Set up custom domain (leads.purvenhub.com)
- [ ] Configure WhatsApp webhook (if using WhatsApp Business API)
