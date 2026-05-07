'use client';

import { useState } from 'react';

export default function YouTubeTitles() {
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
        body: JSON.stringify({ topic, type: 'youtube_title' }),
      });
      const data = await res.json();
      setResults(data.titles || []);
    } catch (err) {}
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-red-600 mb-4 tracking-tighter">
          YouTube Title Master
        </h1>
        <p className="text-xl text-gray-600 font-bold uppercase tracking-widest">Skyrocket your CTR in seconds.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 border border-red-50">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What is your video about? (e.g., Tesla Stock, Keto Diet)"
          className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-red-500/20 outline-none transition-all text-2xl"
        />
        <button
          onClick={generate}
          disabled={loading || !topic.trim()}
          className="w-full mt-8 bg-red-600 text-white py-6 rounded-3xl font-black text-2xl hover:bg-red-700 shadow-xl shadow-red-200 transition-all active:scale-95"
        >
          {loading ? 'Hacking the algorithm...' : 'Generate Viral Titles'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-16 grid grid-cols-1 gap-6">
          {results.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-md hover:shadow-lg transition-all flex justify-between items-center group">
              <p className="text-2xl font-bold text-gray-900 leading-tight">{t}</p>
              <button 
                onClick={() => navigator.clipboard.writeText(t)}
                className="bg-red-50 text-red-600 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all font-bold"
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
