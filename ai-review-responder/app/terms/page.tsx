export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600">
        <p className="mb-4">Effective Date: May 7, 2026</p>
        <p className="mb-6">
          By using AI Review Responder, you agree to these terms.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptable Use</h2>
        <p className="mb-6">
          You agree to use generated responses in a professional manner and according to the terms of 
          the platforms where the reviews were posted.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Subscription Service</h2>
        <p>
          Unlimited generation requires a Pro or Business subscription.
        </p>
      </div>
    </div>
  );
}
