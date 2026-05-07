export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600">
        <p className="mb-4">Last updated: May 7, 2026</p>
        <p className="mb-6">
          At Purven Consulting, we take your privacy seriously. This policy describes how we collect, 
          use, and protect your personal information when you use our AI Lead Qualifier tool.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Data Collection</h2>
        <p className="mb-6">
          We collect lead information (phone numbers and message content) solely for the purpose of 
          qualification as configured by you.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access.
        </p>
      </div>
    </div>
  );
}
