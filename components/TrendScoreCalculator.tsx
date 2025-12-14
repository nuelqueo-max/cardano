import React, { useState, useEffect } from 'react';
import { Gauge } from 'lucide-react';

const TrendScoreCalculator: React.FC = () => {
  const [volume, setVolume] = useState(50);
  const [growth, setGrowth] = useState(50);
  const [competition, setCompetition] = useState(50);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simplified formula: (Volume * 0.4 + Growth * 0.6) / (Competition * 0.01 + 0.5) scaled roughly
    const rawScore = ((volume * 0.4) + (growth * 0.8)) * (100 / (competition + 20));
    setScore(Math.min(100, Math.max(0, rawScore)));
  }, [volume, growth, competition]);

  const getScoreColor = (s: number) => {
    if (s >= 80) return 'text-green-400';
    if (s >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRecommendation = (s: number) => {
    if (s >= 80) return "🚀 OPORTUNIDADE DE OURO! Entre imediatamente.";
    if (s >= 50) return "⚠️ POTENCIAL MODERADO. Valide antes de investir.";
    return "⛔ ALTO RISCO. Mercado saturado ou sem demanda.";
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-6">
        <div className="bg-purple-900/30 p-3 rounded-lg">
          <Gauge className="text-purple-400" size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">TrendScore Calculator™</h2>
          <p className="text-slate-400">Calcule a viabilidade matemática de qualquer ideia.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="text-slate-300 font-medium">Volume de Busca (Interesse)</label>
              <span className="text-purple-400 font-mono">{volume}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={volume} 
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <p className="text-xs text-slate-500">Quanto as pessoas estão procurando por isso?</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="text-slate-300 font-medium">Taxa de Crescimento</label>
              <span className="text-purple-400 font-mono">{growth}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={growth} 
              onChange={(e) => setGrowth(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <p className="text-xs text-slate-500">Está crescendo rápido ou estagnado?</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="text-slate-300 font-medium">Nível de Competição</label>
              <span className="text-red-400 font-mono">{competition}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={competition} 
              onChange={(e) => setCompetition(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <p className="text-xs text-slate-500">Muitos players grandes dominando?</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50"></div>
          
          <h3 className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-4 z-10">Trend Score</h3>
          
          <div className={`text-6xl font-black mb-4 z-10 ${getScoreColor(score)}`}>
            {score.toFixed(0)}
          </div>
          
          <div className="text-center z-10">
             <p className={`font-bold text-lg mb-2 ${getScoreColor(score)}`}>
               {score >= 80 ? 'EXCELENTE' : score >= 50 ? 'REGULAR' : 'FRACA'}
             </p>
             <p className="text-slate-400 text-sm">{getRecommendation(score)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendScoreCalculator;
