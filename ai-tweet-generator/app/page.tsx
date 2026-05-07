'use client';

import { useState } from 'react';

export default function TweetGenerator() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, type: 'tweet' }),
      });
      const data = await res.json();
      setResults(data.tweets || []);
    } catch (err) {}
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-black mb-4 tracking-tighter">
          Elon-Level Tweets
        </h1>
        <p className="text-xl text-gray-500 font-medium">Bypass writer's block. Go viral.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 border border-gray-100">
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What's on your mind? or What article did you just read?"
          rows={4}
          className="w-full px-8 py-6 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-400 outline-none transition-all text-2xl font-medium"
        />
        <button
          onClick={generate}
          disabled={loading || !topic.trim()}
          className="w-full mt-8 bg-black text-white py-6 rounded-2xl font-black text-2xl hover:bg-gray-900 transition-all active:scale-95 shadow-xl"
        >
          {loading ? 'Thinking in 280 characters...' : 'Generate 3 Tweets'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-12 space-y-6">
          {results.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border-2 border-gray-50 hover:border-blue-200 transition-all relative group">
              <p className="text-2xl font-medium text-gray-900 leading-normal">{t}</p>
              <button 
                onClick={() => navigator.clipboard.writeText(t)}
                className="mt-6 text-blue-500 font-black text-lg flex items-center gap-2"
              >
                Copy Tweet <span>🕊️</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
