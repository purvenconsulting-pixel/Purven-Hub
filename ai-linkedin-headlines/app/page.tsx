'use client';

import { useState } from 'react';

export default function LinkedInHeadlines() {
  const [profile, setProfile] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!profile.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, type: 'linkedin_headline' }),
      });
      const data = await res.json();
      setResults(data.headlines || []);
    } catch (err) {}
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-blue-900 mb-4 tracking-tight">
          AI LinkedIn Headline Generator
        </h1>
        <p className="text-xl text-blue-600 font-medium">Stand out to recruiters and clients instantly.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10 border border-blue-50">
        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Paste your current title, skills, or 'About' section here..."
          rows={5}
          className="w-full px-6 py-5 bg-blue-50/30 border border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg"
        />
        <button
          onClick={generate}
          disabled={loading || !profile.trim()}
          className="w-full mt-6 bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          {loading ? 'Analyzing your profile...' : 'Generate 5 Pro Headlines'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-12 space-y-4">
          {results.map((h, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center group hover:border-blue-300 transition-all">
              <p className="text-xl font-medium text-gray-800">{h}</p>
              <button 
                onClick={() => navigator.clipboard.writeText(h)}
                className="text-blue-600 font-bold px-4 py-2 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
