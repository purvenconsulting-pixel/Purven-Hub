# Invoice Generator - Hostinger Horizons Deployment Prompt

## Project Overview
Build a professional Invoice Generator web app with dark/light mode, PDF export, and AI-powered features. Designed for freelancers, small businesses, and contractors.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- jsPDF + html2canvas for PDF generation
- LocalStorage for data persistence

## Core Features

### 1. Invoice Creation
- Company logo upload (drag & drop)
- Company info (name, address, email, phone, tax ID)
- Client info (name, address, email)
- Invoice number (auto-increment)
- Invoice date & due date
- Line items (description, quantity, rate, amount)
- Auto-calculate subtotal, tax, discount, total
- Notes & terms section

### 2. Templates (3 Styles)
- Modern Minimal (clean, lots of white space)
- Professional Classic (traditional business look)
- Bold Creative (for designers/agencies)

### 3. PDF Export
- One-click PDF download
- Print-friendly CSS
- Professional formatting
- File name: Invoice-#[NUMBER].pdf

### 4. Dark/Light Mode
- One-button toggle (top right corner)
- Smooth transition animation
- Persistent preference (localStorage)

### 5. AI Features (Premium)
- AI invoice description generator (describe work, AI writes professional line items)
- Smart tax calculation suggestions
- Payment reminder email draft generator

### 6. Data Management
- Auto-save to localStorage
- Invoice history list
- Duplicate invoice
- Delete/archive invoices
- Search & filter invoices

## Pages

### / (Home)
- Hero: "Create Professional Invoices in Seconds"
- Feature grid (3 features with icons)
- Live demo preview (animated)
- CTA: "Create Free Invoice"
- Footer with links

### /create
- Full invoice creation form
- Real-time preview (side by side)
- Template selector
- Export buttons (PDF, Print)

### /history
- List of all created invoices
- Search bar
- Filter by date/client
- Quick actions (duplicate, delete, download)

### /templates
- Gallery of 3 templates
- Live preview of each
- "Use This Template" button

## Design Requirements

### Color Scheme
- Light mode: White bg, slate-900 text, blue-600 primary
- Dark mode: Slate-950 bg, slate-100 text, blue-500 primary
- Accent: Emerald-500 for success states
- Error: Red-500

### Typography
- Headings: Inter, bold
- Body: Inter, regular
- Mono: JetBrains Mono for numbers/invoice IDs

### UI Components Needed
- Button (primary, secondary, ghost)
- Input (text, number, date)
- Textarea
- Select dropdown
- Card
- Badge
- Toggle (dark/light mode)
- Table (line items)
- File upload (logo)
- Modal (confirmations)
- Toast notifications

## SEO Optimization
- Meta title: "Free Invoice Generator | Create Professional Invoices"
- Meta description: "Create and download professional invoices for free. Custom templates, PDF export, and AI-powered features for freelancers and small businesses."
- Structured data: SoftwareApplication schema
- Open Graph tags
- Sitemap.xml
- robots.txt

## Performance
- Static export (output: 'export')
- Lazy load AI features
- Optimize images
- Minimize JS bundles

## Monetization Integration Points

### Free Tier
- 3 invoices/month
- Basic templates
- PDF export
- LocalStorage only

### Pro Tier ($9/month)
- Unlimited invoices
- All templates
- AI description generator
- Cloud backup
- Custom branding (remove watermark)
- Priority support

### Business Tier ($29/month)
- Everything in Pro
- Team collaboration (up to 5 users)
- API access
- Advanced analytics
- White-label option

## Stripe Integration
- Checkout page for upgrades
- Webhook handling for subscriptions
- Customer portal for billing management

## AdSense Placement
- Home page: Below hero, sidebar
- Create page: Bottom banner
- History page: Between invoice cards
- Responsive ad units

## Additional Revenue Streams

### 1. Affiliate Links (Easy)
- "Recommended Tools for Freelancers" section
- FreshBooks affiliate
- QuickBooks affiliate
- Wave Apps affiliate
- PayPal Business affiliate
- Place in footer and resources page

### 2. Template Marketplace (Future)
- Premium templates ($5-15 each)
- Industry-specific (construction, design, consulting)

### 3. API Access (Business Tier)
- REST API for invoice generation
- Usage-based pricing

## AI Onboarding & Delivery (Super Easy)

### Onboarding Flow
1. User lands on homepage
2. CTA: "Create Your First Invoice" (no signup required)
3. Inline tutorial tooltips on first use
4. "Need help?" → AI chatbot suggests invoice structure

### AI Delivery Features
- "Describe your work" → AI generates professional line items
- "Suggest payment terms" → AI recommends terms based on industry
- "Write a follow-up email" → AI drafts polite payment reminders

### Zero-Touch Delivery
- PDF auto-downloads
- Optional: Email invoice directly (Pro feature)
- Invoice history auto-saves locally
- No account required for basic use

## Deployment Checklist
- [ ] Build completes successfully
- [ ] All pages render correctly
- [ ] PDF export works
- [ ] Dark/light mode toggles smoothly
- [ ] LocalStorage persistence works
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] AdSense code integrated
- [ ] Stripe checkout functional
- [ ] AI features load lazily

## File Structure
```
app/
  page.tsx (home)
  create/
    page.tsx
  history/
    page.tsx
  templates/
    page.tsx
  layout.tsx
  globals.css
components/
  ui/ (shadcn components)
  invoice-form.tsx
  invoice-preview.tsx
  template-selector.tsx
  dark-mode-toggle.tsx
  pdf-export.tsx
  ai-assistant.tsx
lib/
  utils.ts
  pdf-generator.ts
  ai-service.ts
  storage.ts
types/
  invoice.ts
public/
  templates/
  logo.svg
```

## Success Metrics
- Page load < 2 seconds
- Lighthouse score > 90
- Mobile-friendly
- First invoice created < 60 seconds
- PDF generation < 3 seconds
