export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600">
        <p className="mb-4">Effective Date: May 7, 2026</p>
        <p className="mb-6">
          By using AI Lead Qualifier, you agree to these terms. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Use of Service</h2>
        <p className="mb-6">
          You are responsible for ensuring that your use of this tool complies with all local laws and 
          regulations concerning WhatsApp and SMS communication.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Subscription Tiers</h2>
        <p>
          Premium features require an active subscription. Payments are processed via Stripe and are non-refundable.
        </p>
      </div>
    </div>
  );
}
