'use client';

import { useState } from 'react';

export default function Home() {
  const [review, setReview] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [tone, setTone] = useState('professional');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const generateResponse = async () => {
    if (!review.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, businessName, tone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        setResponse('');
      } else {
        setResponse(data.response);
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setResponse('');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Review Responder
        </h1>
        <p className="text-lg text-gray-600">
          Generate perfect responses to customer reviews in seconds
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g., Joe's Coffee Shop"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer Review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Paste the customer review here..."
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Response Tone
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly & Warm</option>
            <option value="apologetic">Apologetic (for negative reviews)</option>
            <option value="grateful">Grateful & Enthusiastic</option>
            <option value="concise">Short & Concise</option>
          </select>
        </div>

        <button
          onClick={generateResponse}
          disabled={loading || !review.trim()}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Generating...' : 'Generate Response'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {response && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Response</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-800 whitespace-pre-wrap">{response}</p>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => navigator.clipboard.writeText(response)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={generateResponse}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Regenerate
            </button>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Free plan: 5 responses/day • Pro: $29/mo unlimited
        </p>
      </div>
    </div>
  );
}
