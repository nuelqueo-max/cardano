import React, { useState } from 'react';
import { analyzeNicheTrends } from '../services/geminiService';
import { TrendAnalysisResult } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Search, Loader2, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const TrendAnalyzer: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrendAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!niche.trim()) return;
    setLoading(true);
    try {
      const data = await analyzeNicheTrends(niche);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
          TrendAI Analyzer
        </h2>
        <p className="text-slate-400 mb-6">
          Digite um nicho ou mercado para nossa IA escanear oportunidades ocultas e prever saturação.
        </p>
        
        <div className="flex gap-4 flex-col sm:flex-row">
          <input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="Ex: Marketing Digital, Pets, Moda Sustentável..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !niche}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
            {loading ? 'Analisando...' : 'Escanear Mercado'}
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <TrendingUp className="text-green-400" /> Resumo Estratégico
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {result.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart */}
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl min-h-[400px]">
              <h4 className="text-lg font-medium text-slate-200 mb-4">Potencial vs. Saturação</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={result.trends} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#fff' }}
                    cursor={{fill: '#334155', opacity: 0.4}}
                  />
                  <Bar dataKey="growthPotential" name="Potencial de Lucro" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
                  <Bar dataKey="saturation" name="Nível de Saturação" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-sm"></div> Potencial</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Saturação</div>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {result.trends.map((trend, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-purple-500/50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {idx + 1}. {trend.name}
                    </h4>
                    <span className="text-xs font-mono bg-slate-900 px-2 py-1 rounded text-slate-400 border border-slate-700">
                      {trend.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{trend.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between text-xs text-slate-500 uppercase font-bold tracking-wider">
                        <span>Oportunidade</span>
                        <span>{trend.growthPotential}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-indigo-500" 
                          style={{ width: `${trend.growthPotential}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {trend.growthPotential > 80 && trend.saturation < 40 && (
                    <div className="mt-3 flex items-center gap-1 text-green-400 text-xs font-bold">
                      <CheckCircle size={14} /> TENDÊNCIA GOLD (Entrar Agora)
                    </div>
                  )}
                  {trend.saturation > 70 && (
                    <div className="mt-3 flex items-center gap-1 text-red-400 text-xs font-bold">
                      <AlertTriangle size={14} /> ALTA SATURAÇÃO (Cuidado)
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendAnalyzer;
