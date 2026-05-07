export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600">
        <p className="mb-4">Last updated: May 7, 2026</p>
        <p className="mb-6">
          At Purven Consulting, we prioritize your data privacy. This policy covers our handling of 
          business names and review content used in the AI Review Responder.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information Usage</h2>
        <p className="mb-6">
          Review data is used strictly for generating AI responses. We do not store or sell your data.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. AI Processing</h2>
        <p>
          We use secure AI providers to process responses. No personally identifiable information should 
          be included in the data you provide.
        </p>
      </div>
    </div>
  );
}
