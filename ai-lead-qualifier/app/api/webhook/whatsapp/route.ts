import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // WhatsApp webhook payload structure
    const { entry } = body;
    
    if (!entry || !entry[0]?.changes[0]?.value?.messages) {
      return NextResponse.json({ status: 'no_messages' });
    }

    const message = entry[0].changes[0].value.messages[0];
    const from = message.from;
    const text = message.text?.body || '';

    // Forward to qualification API
    const qualifyRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/qualify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: from,
        message: text,
      }),
    });

    const qualification = await qualifyRes.json();

    // TODO: Send response back via WhatsApp API
    // This requires WhatsApp Business API integration
    
    return NextResponse.json({
      status: 'processed',
      lead: qualification.lead,
      response: qualification.suggestedResponse,
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

// Verify webhook for WhatsApp API setup
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new NextResponse(challenge);
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}
