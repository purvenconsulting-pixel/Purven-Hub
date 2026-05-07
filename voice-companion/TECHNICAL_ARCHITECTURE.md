# Voice Companion - Technical Architecture

## Recommended Stack: Web PWA

Why PWA over native app:
- Faster to build and iterate
- Works on all devices (iOS, Android, desktop)
- No app store approval process
- Easy updates
- Can still send push notifications
- Can be "installed" like a native app

## Architecture Diagram

```
User Device (Browser)
 |
 |-- Web Speech API (mic input)
 |-- Audio Playback (speaker output)
 |
 v
PWA Frontend (Next.js)
 |
 |-- Voice Activity Detection
 |-- Speech-to-Text (Web Speech API)
 |-- Conversation Manager
 |-- Task Manager
 |-- Mood Tracker
 |
 v
Backend API (Node.js/Express)
 |
 |-- Claude API Integration
 |-- ElevenLabs API (optional)
 |-- User Authentication
 |-- Data Persistence
 |
 v
Database (PostgreSQL or Supabase)
 |-- User profiles
 |-- Conversation history
 |-- Tasks
 |-- Mood logs
```

## Core Components

### 1. Voice Pipeline

```javascript
// Voice Input Flow
1. User speaks → Web Speech API captures
2. Speech-to-text converts to text
3. Text sent to Claude API
4. Claude generates response
5. Text-to-speech converts to audio (Web Speech or ElevenLabs)
6. Audio plays to user
```

**Latency Optimization:**
- Use Web Speech API (free, built-in)
- Stream Claude response (don't wait for full text)
- Interleave TTS (start speaking before full response)
- Target: 1-2 second response time

### 2. Conversation Engine

```javascript
// System Prompt for Claude
const systemPrompt = `You are a compassionate voice companion named [NAME].
Your purpose is to provide emotional support, motivation, and ADHD assistance.

Key traits:
- Warm, empathetic, non-judgmental
- Validate feelings before offering solutions
- Use casual, conversational language
- Remember details from previous conversations
- Be concise (2-3 sentences max for voice)

ADHD Support:
- Break tasks into tiny steps
- Use gentle reminders, not demands
- Celebrate small wins
- Help with time blindness
- Offer dopamine-friendly suggestions

Crisis Protocol:
If user expresses self-harm or severe distress:
1. Stay calm and present
2. Validate their pain
3. Ask if they're safe right now
4. Provide crisis resources (988, crisis text line)
5. Encourage reaching out to a human

Current context: ${userContext}
Time: ${currentTime}
Upcoming tasks: ${tasks}`;
```

### 3. Task Management (ADHD-Optimized)

```javascript
// Voice Task Creation
User: "Remind me to call mom at 3pm"
→ Parse: {task: "Call mom", time: "15:00", type: "reminder"}
→ Store in database
→ Schedule push notification

// ADHD Features
- "What's my next tiny step?" → Break down current task
- "How long have I been doing this?" → Track focus time
- "I can't start" → Offer 2-minute rule, body doubling
- "I'm overwhelmed" → Help prioritize, cancel non-essential
```

### 4. Proactive Check-ins

```javascript
// Scheduled Interactions
Morning (configurable time):
- "Good morning! How are you feeling today?"
- Review today's tasks
- Offer motivation

Afternoon:
- "How's your day going?"
- Task progress check
- Encouragement

Evening:
- "What went well today?"
- Celebrate wins
- Wind-down routine

Focus Session:
- "Ready to focus? Let's do 25 minutes."
- Timer with voice updates
- "5 minutes left, you're doing great!"
- "Time's up! How did it go?"
```

## Implementation with Your Tools

### Using Google Antigravity
- Deploy backend services
- Database hosting
- API gateway
- Authentication service

### Using Hostinger Horizons
- Host PWA frontend
- Static asset delivery
- CDN for fast global access
- SSL certificates

### Using Claude
- Conversation intelligence
- Task parsing
- Mood analysis
- Crisis detection

## Data Model

```sql
-- Users
CREATE TABLE users (
 id UUID PRIMARY KEY,
 name TEXT,
 companion_name TEXT DEFAULT 'Companion',
 personality TEXT DEFAULT 'warm',
 voice_preference TEXT,
 created_at TIMESTAMP
);

-- Conversations
CREATE TABLE conversations (
 id UUID PRIMARY KEY,
 user_id UUID REFERENCES users(id),
 message TEXT,
 role TEXT, -- 'user' or 'assistant'
 timestamp TIMESTAMP,
 mood_score INTEGER -- 1-10
);

-- Tasks
CREATE TABLE tasks (
 id UUID PRIMARY KEY,
 user_id UUID REFERENCES users(id),
 title TEXT,
 description TEXT,
 due_date TIMESTAMP,
 completed BOOLEAN DEFAULT FALSE,
 created_via_voice BOOLEAN DEFAULT TRUE,
 tiny_steps JSONB -- Break down for ADHD
);

-- Mood Logs
CREATE TABLE mood_logs (
 id UUID PRIMARY KEY,
 user_id UUID REFERENCES users(id),
 score INTEGER, -- 1-10
 note TEXT,
 timestamp TIMESTAMP
);

-- Focus Sessions
CREATE TABLE focus_sessions (
 id UUID PRIMARY KEY,
 user_id UUID REFERENCES users(id),
 duration INTEGER, -- minutes
 started_at TIMESTAMP,
 completed BOOLEAN,
 interruptions INTEGER
);
```

## API Endpoints

```javascript
// Voice Conversation
POST /api/conversation
Body: { message: string, userId: string }
Response: { response: string, audioUrl?: string, actions?: [] }

// Task Management
POST /api/tasks
GET /api/tasks?userId=
PATCH /api/tasks/:id/complete
DELETE /api/tasks/:id

// Mood Tracking
POST /api/mood
GET /api/mood/history?userId=

// User Settings
GET /api/user/settings
PATCH /api/user/settings

// Focus Sessions
POST /api/focus/start
POST /api/focus/stop
GET /api/focus/stats
```

## Security & Privacy

1. **Encryption**: All conversations encrypted at rest and in transit
2. **Anonymization**: Option to use without account
3. **Data Control**: Users can export/delete all data
4. **Crisis Protocol**: Human review for crisis interventions
5. **No Data Selling**: Clear privacy policy

## Cost Estimates (Monthly)

### Free Tier (Self-Hosted)
- Hosting: $0 (Hostinger Horizons free tier)
- Claude API: $0 (limited usage)
- Web Speech API: $0 (browser built-in)
- **Total: $0**

### Pro Tier (With ElevenLabs)
- Hosting: $5-10
- Claude API: $20-50 (depends on usage)
- ElevenLabs: $5-20 (voice generation)
- Database: $0-10
- **Total: $30-90/month**

### Scale (1000+ users)
- Hosting: $50-100
- Claude API: $200-500
- ElevenLabs: $100-300
- Database: $50-100
- **Total: $400-1000/month**

## Build Order

### Week 1: Voice Foundation
- [ ] Set up Next.js project
- [ ] Implement Web Speech API
- [ ] Connect to Claude API
- [ ] Basic conversation flow
- [ ] Deploy to Hostinger Horizons

### Week 2: Core Features
- [ ] Task creation via voice
- [ ] Push notifications
- [ ] User settings
- [ ] Conversation history
- [ ] PWA setup

### Week 3: ADHD Features
- [ ] Focus timer with voice
- [ ] Task breakdown
- [ ] Mood tracking
- [ ] Proactive check-ins
- [ ] Crisis detection

### Week 4: Polish
- [ ] Multiple voices (ElevenLabs)
- [ ] Personality customization
- [ ] Mobile optimization
- [ ] Onboarding flow
- [ ] Analytics

## Testing Strategy

1. **ADHD Community Testing**: Partner with ADHD influencers/communities
2. **Beta Program**: 50 users, 2 weeks
3. **Feedback Loops**: In-app feedback, weekly surveys
4. **Crisis Testing**: Simulate crisis scenarios, verify protocols

## Success Metrics

- **Engagement**: Daily active users, session length
- **ADHD Support**: Task completion rate, focus session usage
- **Emotional**: Mood improvement over time
- **Retention**: 7-day, 30-day retention
- **Satisfaction**: NPS score, app store rating

## Next Steps

1. Validate concept with ADHD community
2. Build MVP (Week 1 scope)
3. Test with 5-10 beta users
4. Iterate based on feedback
5. Launch on Product Hunt
