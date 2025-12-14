import React, { useState } from 'react';
import { AI_PROMPTS } from '../constants';
import { Copy, Check, Terminal } from 'lucide-react';

const PromptLibrary: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Prompts Milionários</h2>
        <p className="text-slate-400">Copie. Cole no ChatGPT. Lucre.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AI_PROMPTS.map((prompt) => (
          <div key={prompt.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-900/10 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/40 rounded-lg text-purple-300">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{prompt.title}</h3>
                  <span className="text-xs text-slate-500 font-mono uppercase bg-slate-900 px-2 py-0.5 rounded">{prompt.category}</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(prompt.id, prompt.content)}
                className={`p-2 rounded-lg transition-all ${
                  copiedId === prompt.id 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-slate-700 text-slate-300 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {copiedId === prompt.id ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            
            <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm text-slate-300 relative border border-slate-800">
              <p className="line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {prompt.content}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-900/90 to-transparent group-hover:hidden pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptLibrary;
