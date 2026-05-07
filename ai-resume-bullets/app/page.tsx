'use client';

import { useState } from 'react';

export default function ResumeBullets() {
  const [jobTitle, setJobTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [tone, setTone] = useState('impactful');
  const [bullets, setBullets] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateBullets = async () => {
    if (!jobTitle.trim() || !responsibilities.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTitle, responsibilities, tone, type: 'resume_bullets' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate');
      setBullets(data.bullets || []);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          AI Resume Bullet Points
        </h1>
        <p className="text-lg text-gray-600">
          Transform boring tasks into high-impact achievement statements.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 mb-8 backdrop-blur-sm bg-white/80">
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
            Target Job Title
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g., Senior Project Manager"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
            What did you do? (Draft)
          </label>
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="e.g., I managed a team and reduced costs using new software."
            rows={4}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>

        <button
          onClick={generateBullets}
          disabled={loading || !jobTitle.trim()}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:from-gray-400 disabled:to-gray-500 transition-all"
        >
          {loading ? 'Crafting achievements...' : 'Generate Power Bullets'}
        </button>
      </div>

      {bullets.length > 0 && (
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">✨</span>
            Optimized Achievement Statements
          </h2>
          <div className="space-y-4">
            {bullets.map((bullet, i) => (
              <div key={i} className="group relative bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                <p className="text-gray-800 leading-relaxed pr-8">{bullet}</p>
                <button 
                  onClick={() => navigator.clipboard.writeText(bullet)}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-blue-600 hover:scale-110 transition-all"
                >
                  📋
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
