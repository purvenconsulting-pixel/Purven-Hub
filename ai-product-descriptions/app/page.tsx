'use client';

import { useState } from 'react';

export default function ProductDescriptions() {
  const [product, setProduct] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!product.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, type: 'product_description' }),
      });
      const data = await res.json();
      setResults(data.descriptions || []);
    } catch (err) {}
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-indigo-900 mb-4 tracking-tighter">
          High-Converting Descriptions
        </h1>
        <p className="text-xl text-indigo-500 font-medium">Turn browsers into buyers with persuasive AI copy.</p>
      </div>

      <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(49,46,129,0.1)] p-16 border border-indigo-50">
        <textarea
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="What are you selling? Describe the features or benefits..."
          rows={5}
          className="w-full px-10 py-8 bg-indigo-50/20 border border-transparent rounded-[2rem] focus:bg-white focus:border-indigo-400 outline-none transition-all text-2xl"
        />
        <button
          onClick={generate}
          disabled={loading || !product.trim()}
          className="w-full mt-10 bg-indigo-600 text-white py-8 rounded-[2rem] font-black text-2xl hover:bg-indigo-700 shadow-2xl shadow-indigo-200 transition-all active:scale-95 uppercase tracking-widest"
        >
          {loading ? 'Crafting the pitch...' : 'Generate 3 Versions'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-20 space-y-12">
          {results.map((d, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
              <p className="text-2xl font-medium text-gray-800 leading-relaxed whitespace-pre-wrap">{d}</p>
              <button 
                onClick={() => navigator.clipboard.writeText(d)}
                className="mt-10 px-8 py-4 bg-indigo-50 text-indigo-700 rounded-2xl font-black text-lg hover:bg-indigo-100 transition-all uppercase"
              >
                Copy Description
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
