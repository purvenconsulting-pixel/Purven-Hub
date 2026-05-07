'use client';

import { useState } from 'react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  source: string;
  status: 'new' | 'qualified' | 'unqualified' | 'contacted';
  score: number;
  notes: string;
  date: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [testPhone, setTestPhone] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const [testResult, setTestResult] = useState<any>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [testError, setTestError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      source: 'Website',
      status: 'qualified',
      score: 85,
      notes: 'Budget: $5K/mo, Timeline: 30 days, Decision maker: Yes',
      date: '2024-01-15',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      phone: '+1 (555) 987-6543',
      source: 'WhatsApp',
      status: 'new',
      score: 0,
      notes: 'Pending qualification...',
      date: '2024-01-16',
    },
  ]);

  const [showSetup, setShowSetup] = useState(false);

  const runTestQualification = async () => {
    if (!testPhone.trim() || !testMessage.trim()) return;
    setTestLoading(true);
    setTestError('');
    setTestResult(null);
    try {
      const res = await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: testPhone, message: testMessage }),
      });
      const data = await res.json();
      if (!res.ok) {
        setTestError(data.error || 'Something went wrong');
      } else {
        setTestResult(data);
        const newLead: Lead = {
          id: Date.now().toString(),
          name: 'Test Lead',
          phone: testPhone,
          source: 'Test',
          status: data.lead.status,
          score: data.lead.score,
          notes: data.suggestedResponse,
          date: new Date().toISOString().split('T')[0],
        };
        setLeads((prev) => [newLead, ...prev]);
      }
    } catch {
      setTestError('Network error. Please try again.');
    }
    setTestLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'unqualified': return 'bg-red-100 text-red-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Lead Qualifier</h1>
            <p className="text-sm text-gray-500">Auto-qualify leads via WhatsApp & SMS</p>
          </div>
          <button
            onClick={() => setShowSetup(!showSetup)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Setup Bot
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Total Leads</p>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Qualified</p>
            <p className="text-3xl font-bold text-green-600">18</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-3xl font-bold text-blue-600">75%</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Time Saved</p>
            <p className="text-3xl font-bold text-purple-600">12h</p>
          </div>
        </div>

        {/* Setup Panel */}
        {showSetup && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Bot Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification Questions
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>What's your budget?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>What's your timeline?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>Are you the decision maker?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>What's your biggest pain point?</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification Criteria
                </label>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm">Min Budget: $</span>
                    <input type="number" defaultValue={1000} className="ml-2 w-24 px-2 py-1 border rounded" />
                  </div>
                  <div>
                    <span className="text-sm">Min Timeline: </span>
                    <input type="number" defaultValue={30} className="ml-2 w-24 px-2 py-1 border rounded" />
                    <span className="text-sm"> days</span>
                  </div>
                  <div>
                    <span className="text-sm">Auto-book meeting if score ≥ </span>
                    <input type="number" defaultValue={70} className="ml-2 w-16 px-2 py-1 border rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Save Settings
              </button>
              <button 
                onClick={() => setShowSetup(false)}
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                Export CSV
              </button>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                + Add Lead
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{lead.name}</p>
                      <p className="text-sm text-gray-500">{lead.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-lg font-bold ${getScoreColor(lead.score)}`}>
                      {lead.score > 0 ? lead.score : '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {lead.notes}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Test Qualification */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Lead Qualification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={testPhone}
              onChange={(e) => setTestPhone(e.target.value)}
              placeholder="Phone number"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={testMessage}
              onChange={(e) => setTestMessage(e.target.value)}
              placeholder="Lead message e.g. My budget is $5000 and I need help ASAP"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={runTestQualification}
            disabled={testLoading || !testPhone.trim() || !testMessage.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {testLoading ? 'Analyzing...' : 'Test Qualify'}
          </button>
          {testError && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">{testError}</p>
            </div>
          )}
          {testResult && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold">Score: {testResult.lead.score} — {testResult.lead.status}</p>
              <p className="text-green-700 mt-1">Next Action: {testResult.nextAction}</p>
              <p className="text-green-700 mt-1">Suggested Response: {testResult.suggestedResponse}</p>
            </div>
          )}
        </div>

        {/* Integration Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">WhatsApp Integration</h3>
          <p className="text-blue-700 mb-4">
            Connect your WhatsApp Business API to start auto-qualifying leads.
          </p>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Connect WhatsApp
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
