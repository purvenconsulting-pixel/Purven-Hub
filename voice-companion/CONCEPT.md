# Voice Companion App - Concept Document

## Vision
An AI voice companion that provides emotional support, motivation, and daily task management through natural conversation. Designed for people who need companionship, ADHD support, or just someone to talk to without judgment.

## Core Value Propositions

### 1. Emotional Support
- Active listening without judgment
- Empathetic responses
- Mood tracking over time
- Crisis detection and resources

### 2. ADHD Support
- Voice-based task creation ("Remind me to call mom at 3pm")
- Gentle check-ins throughout the day
- Focus sessions with voice coaching
- Routine building and habit tracking
- Hyperfocus interruption ("You've been working 3 hours, take a break")

### 3. Motivation & Accountability
- Morning motivation messages
- Goal tracking via voice
- Celebration of wins (no matter how small)
- Encouragement during setbacks

### 4. Reading & Storytelling
- Read articles aloud
- Bedtime stories for adults
- Book summaries
- Voice-guided meditation

## Tech Stack Options

### Option A: Web-Based (Fastest to Build)
- **Frontend:** Next.js + Web Speech API (browser-based voice)
- **Backend:** Node.js + WebSocket for real-time voice
- **AI:** Claude API for conversation intelligence
- **Voice:** Web Speech API (free, limited voices) or ElevenLabs API (premium, natural)
- **Storage:** LocalStorage + optional cloud sync
- **Deployment:** Hostinger Horizons or Vercel

### Option B: Mobile App (Best Experience)
- **Framework:** React Native or Flutter
- **Voice:** Native speech recognition + ElevenLabs
- **AI:** Claude API
- **Push Notifications:** For reminders and check-ins
- **Deployment:** App Store / Google Play

### Option C: Hybrid (Recommended)
- **PWA (Progressive Web App)** - Works on mobile + desktop
- **Voice:** Web Speech API + ElevenLabs fallback
- **AI:** Claude API
- **Notifications:** Web Push API
- **Offline:** Basic functionality without internet

## Key Features

### Voice Interface
- Wake word ("Hey Companion" or custom name)
- Natural conversation flow
- Interruptible responses
- Voice speed/pitch customization
- Multiple voice personalities

### Conversation Modes
1. **Casual Chat** - Open-ended conversation
2. **Focus Mode** - Pomodoro-style work sessions with voice coaching
3. **Task Mode** - Create, manage, complete tasks via voice
4. **Story Mode** - Read content aloud
5. **Sleep Mode** - Bedtime stories, sleep sounds, gentle wake-up
6. **Crisis Mode** - Detect distress, offer resources, stay present

### ADHD-Specific Features
- **Time blindness help** - "What time is it? How long have I been doing this?"
- **Task initiation** - Break down overwhelming tasks into tiny steps
- **Transition support** - "5-minute warning before your next task"
- **Dopamine menu** - Suggest quick mood boosters
- **Rejection sensitivity** - Validate feelings, reframe situations
- **Executive dysfunction** - Gentle prompts, not demands

### Personalization
- Name your companion
- Choose personality (warm friend, coach, therapist-lite)
- Voice selection
- Conversation history memory
- Preference learning over time

## Monetization Strategy

### Free Tier
- 30 minutes voice conversation daily
- Basic task management
- One voice personality
- Limited conversation memory

### Pro ($9.99/month)
- Unlimited conversations
- All voice personalities
- Advanced ADHD features
- Conversation history
- Custom wake word
- Priority voice quality (ElevenLabs)

### Family ($14.99/month)
- Up to 4 profiles
- Shared tasks and reminders
- Parent dashboard for kids

### Enterprise (Custom)
- Healthcare integration
- Therapist dashboard
- HIPAA compliance
- Custom training

## Implementation Roadmap

### Phase 1: MVP (2-3 weeks)
- Basic voice chat with Claude
- Web-based interface
- Simple task creation via voice
- One voice personality
- LocalStorage persistence

### Phase 2: Enhanced Experience (2-3 weeks)
- Multiple conversation modes
- Better voice quality (ElevenLabs)
- ADHD-specific features
- Mood tracking
- Push notifications

### Phase 3: Polish & Scale (2-4 weeks)
- Mobile PWA
- Custom wake word
- Advanced personalization
- Crisis detection
- Family profiles

## Competitive Landscape

### Existing Solutions
- **Replika** - AI companion, text-based, subscription model
- **Character.AI** - Roleplay conversations, not therapeutic
- **Woebot** - Mental health chatbot, text-based
- **Sanvello** - Mental health app, limited voice

### Differentiation
- Voice-first (not text)
- ADHD-specific design
- Proactive (not just reactive)
- No judgment, genuine empathy
- Daily life integration (tasks, reminders)

## Technical Considerations

### Voice Latency
- Target: <2 seconds response time
- Streaming responses (don't wait for full generation)
- Pre-warm connections

### Privacy
- Conversations encrypted
- Local processing where possible
- Clear data policies
- Option for local-only mode

### Accessibility
- Works with screen readers
- High contrast mode
- Adjustable text size
- Works offline for basic features

## Success Metrics
- Daily active users
- Average conversation length
- Task completion rate (ADHD users)
- User retention (7-day, 30-day)
- Net Promoter Score
- Crisis intervention success

## Next Steps
1. Build MVP with Web Speech API + Claude
2. Test with ADHD community
3. Iterate based on feedback
4. Add ElevenLabs for premium voices
5. Launch on Product Hunt
