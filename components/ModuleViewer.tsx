import React from 'react';
import { COURSE_MODULES } from '../constants';
import { Lock, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';

const ModuleViewer: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white">Área de Membros</h2>
          <p className="text-slate-400">Seu progresso: 14% concluído</p>
        </div>
      </div>

      <div className="grid gap-6">
        {COURSE_MODULES.map((module, index) => (
          <div key={module.id} className={`bg-slate-800 border ${index < 3 ? 'border-slate-600' : 'border-slate-700 opacity-75'} rounded-xl overflow-hidden transition-all hover:border-purple-500/50`}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                   <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl ${
                     index < 3 ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'bg-slate-700 text-slate-400'
                   }`}>
                     {index + 1}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
                       {module.title}
                       {index > 2 && <Lock size={16} className="text-slate-500" />}
                     </h3>
                     <p className="text-slate-400 text-sm mt-1">{module.description}</p>
                   </div>
                </div>
                <span className="text-xs font-mono bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                  {module.duration}
                </span>
              </div>

              <div className="mt-6 space-y-3 pl-16">
                {module.lessons.map((lesson, lIdx) => (
                  <div key={lIdx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      {index === 0 && lIdx === 0 ? (
                         <CheckCircle2 size={18} className="text-green-500" />
                      ) : (
                        <PlayCircle size={18} className="text-slate-500 group-hover:text-purple-400" />
                      )}
                      <span className={`text-sm ${index === 0 && lIdx === 0 ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
                        {lesson}
                      </span>
                    </div>
                    {index < 3 && <FileText size={14} className="text-slate-600 group-hover:text-purple-400" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleViewer;
