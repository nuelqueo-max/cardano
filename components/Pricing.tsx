import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">Oferta Limitada</span>
        <h2 className="text-4xl font-black text-white mt-2 mb-6">Escolha Seu Plano de Dominação</h2>
        <p className="text-slate-400">
          O investimento que se paga com a descoberta de uma única tendência.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-slate-300">Start</h3>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">R$ 97</span>
            <span className="text-slate-500">/único</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={16} className="text-green-500" /> Acesso ao Curso Completo</li>
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={16} className="text-green-500" /> 10 Prompts Básicos</li>
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={16} className="text-green-500" /> TrendScore Calculator</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-900/20 font-bold transition-all">
            Começar Básico
          </button>
        </div>

        {/* Pro - Featured */}
        <div className="bg-gradient-to-b from-purple-900/80 to-slate-900 border border-purple-500 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-purple-900/50">
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            MAIS VENDIDO
          </div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20} className="fill-yellow-400 text-yellow-400" /> TrendAI Pro</h3>
          <div className="my-6">
            <span className="text-slate-400 line-through text-sm block">R$ 297</span>
            <span className="text-5xl font-black text-white">R$ 147</span>
            <span className="text-purple-300 text-sm">/único</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-green-400" /> <strong>Tudo do plano Start</strong></li>
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-green-400" /> TrendAnalyzer IA (Ilimitado)</li>
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-green-400" /> 100+ Prompts Milionários</li>
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-green-400" /> Módulo Bônus: Automação</li>
          </ul>
          <button className="w-full py-4 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 transition-all animate-pulse">
            Garantir Acesso Vitalício
          </button>
        </div>

        {/* Elite */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-slate-300">Mentoria Elite</h3>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">R$ 497</span>
            <span className="text-slate-500">/ano</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={16} className="text-green-500" /> <strong>Tudo do TrendAI Pro</strong></li>
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Star size={16} className="text-yellow-500" /> Radar Semanal de Tendências</li>
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Star size={16} className="text-yellow-500" /> Comunidade Fechada (Discord)</li>
            <li className="flex items-center gap-3 text-slate-300 text-sm"><Star size={16} className="text-yellow-500" /> Call Mensal em Grupo</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-700 font-bold transition-all">
            Aplicar para Mentoria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
