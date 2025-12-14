import React, { useState } from 'react';
import { 
  BarChart2, 
  BookOpen, 
  Cpu, 
  LayoutDashboard, 
  Menu, 
  X, 
  Sparkles,
  Calculator,
  LogOut,
  CreditCard
} from 'lucide-react';
import { AppView } from './types';
import TrendAnalyzer from './components/TrendAnalyzer';
import TrendScoreCalculator from './components/TrendScoreCalculator';
import PromptLibrary from './components/PromptLibrary';
import ModuleViewer from './components/ModuleViewer';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple authentication simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView(AppView.DASHBOARD);
  };

  const NavItem = ({ view, icon: Icon, label }: { view: AppView; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all ${
        currentView === view
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const LandingPage = () => (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-lg">
              <Sparkles className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">TrendAI<span className="text-purple-400">Pro</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentView(AppView.PRICING)} className="text-slate-300 hover:text-white transition-colors font-medium">Preços</button>
            <button onClick={() => setCurrentView(AppView.ANALYZER)} className="text-slate-300 hover:text-white transition-colors font-medium">Demo</button>
            <button 
              onClick={handleLogin}
              className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Área de Membros
            </button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-purple-300 text-sm font-medium">IA v2.5 Liberada</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
          Descubra tendências <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
             ANTES da massa.
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          O primeiro sistema de inteligência artificial que encontra dinheiro escondido no mercado. 
          Sem experiência. Sem "achismos". Apenas dados.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
             onClick={handleLogin}
             className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-purple-900/40 transition-all transform hover:-translate-y-1"
          >
            Começar Agora
          </button>
          <button 
            onClick={() => setCurrentView(AppView.ANALYZER)}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold text-lg transition-all"
          >
            Ver Demo ao Vivo
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 text-purple-400">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">IA Preditiva</h3>
            <p className="text-slate-400">Nossos algoritmos analisam milhões de dados para prever o que vai vender semana que vem.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-colors">
            <div className="w-12 h-12 bg-pink-900/50 rounded-lg flex items-center justify-center mb-6 text-pink-400">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dados em Tempo Real</h3>
            <p className="text-slate-400">Monitore Google, TikTok e Amazon simultaneamente para não perder nenhuma oportunidade.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-colors">
            <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center mb-6 text-orange-400">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Método Validado</h3>
            <p className="text-slate-400">Não é só uma ferramenta. É um curso completo ensinando como transformar dados em lucro.</p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      
      {!isAuthenticated && currentView === AppView.LANDING ? (
        <LandingPage />
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:flex flex-col w-72 bg-slate-900 border-r border-slate-800 h-full">
            <div className="p-6 flex items-center gap-3">
              <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-xl font-black text-white">TrendAI<span className="text-purple-400">Pro</span></span>
            </div>
            
            <nav className="flex-1 px-4 space-y-2 mt-4">
              <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Plataforma</p>
              <NavItem view={AppView.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
              <NavItem view={AppView.ANALYZER} icon={BarChart2} label="Trend Analyzer" />
              <NavItem view={AppView.CALCULATOR} icon={Calculator} label="Calculadora Score" />
              
              <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-8">Educação</p>
              <NavItem view={AppView.COURSE} icon={BookOpen} label="Meus Cursos" />
              <NavItem view={AppView.PROMPTS} icon={Cpu} label="Biblioteca Prompts" />
              
              {!isAuthenticated && (
                <div className="mt-8">
                  <NavItem view={AppView.PRICING} icon={CreditCard} label="Assinar Premium" />
                </div>
              )}
            </nav>

            <div className="p-4 border-t border-slate-800">
               {isAuthenticated ? (
                 <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-2 transition-colors">
                   <LogOut size={18} /> Sair
                 </button>
               ) : (
                 <button onClick={handleLogin} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                   Acessar Conta
                 </button>
               )}
            </div>
          </aside>

          {/* Mobile Header */}
          <div className="lg:hidden fixed top-0 w-full z-40 bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
               <div className="bg-purple-600 p-1.5 rounded">
                  <Sparkles className="text-white" size={16} />
               </div>
               <span className="font-bold text-white">TrendAI</span>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-30 bg-slate-950 pt-20 px-6 space-y-4 lg:hidden">
              <NavItem view={AppView.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
              <NavItem view={AppView.ANALYZER} icon={BarChart2} label="Trend Analyzer" />
              <NavItem view={AppView.CALCULATOR} icon={Calculator} label="Calculadora Score" />
              <NavItem view={AppView.COURSE} icon={BookOpen} label="Meus Cursos" />
              <NavItem view={AppView.PROMPTS} icon={Cpu} label="Prompts" />
              {!isAuthenticated && <NavItem view={AppView.PRICING} icon={CreditCard} label="Preços" />}
            </div>
          )}

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto h-full pt-16 lg:pt-0 bg-slate-950 relative">
             <div className="max-w-6xl mx-auto p-6 md:p-10">
                {currentView === AppView.DASHBOARD && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="flex justify-between items-end">
                      <div>
                        <h1 className="text-3xl font-bold text-white">Bem vindo, Explorador.</h1>
                        <p className="text-slate-400">O mercado mudou 12% nas últimas 24 horas.</p>
                      </div>
                      <button onClick={() => setCurrentView(AppView.ANALYZER)} className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-purple-900/20 transition-all">
                        Nova Análise
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-purple-500/30 transition-colors cursor-pointer" onClick={() => setCurrentView(AppView.ANALYZER)}>
                         <div className="flex justify-between items-start mb-4">
                           <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400"><BarChart2 /></div>
                           <span className="text-xs font-bold bg-green-900/30 text-green-400 px-2 py-1 rounded">+12%</span>
                         </div>
                         <h3 className="text-xl font-bold text-white">TrendAnalyzer</h3>
                         <p className="text-sm text-slate-400 mt-1">Sua última busca: "Dropshipping pet"</p>
                      </div>
                      
                      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-colors cursor-pointer" onClick={() => setCurrentView(AppView.COURSE)}>
                         <div className="flex justify-between items-start mb-4">
                           <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400"><BookOpen /></div>
                           <span className="text-xs font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded">Módulo 2</span>
                         </div>
                         <h3 className="text-xl font-bold text-white">Continuar Curso</h3>
                         <p className="text-sm text-slate-400 mt-1">Próxima aula: Google Trends + IA</p>
                      </div>

                      <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-purple-500/30 p-6 rounded-xl relative overflow-hidden">
                         <div className="relative z-10">
                           <h3 className="text-lg font-bold text-white mb-2">Upgrade Pro</h3>
                           <p className="text-sm text-slate-300 mb-4">Desbloqueie o Radar Semanal e Mentorias.</p>
                           <button onClick={() => setCurrentView(AppView.PRICING)} className="text-xs bg-white text-slate-900 font-bold px-3 py-1.5 rounded hover:bg-slate-200">Ver Oferta</button>
                         </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-4">Tendências da Semana (Global)</h3>
                      <div className="space-y-4">
                         {[
                           { name: 'IA para Edição de Vídeo', growth: 94, niche: 'SaaS' },
                           { name: 'Suplementos Nootrópicos', growth: 82, niche: 'Saúde' },
                           { name: 'Decoração Japandi', growth: 67, niche: 'Casa' }
                         ].map((t, i) => (
                           <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                             <div className="flex items-center gap-3">
                               <span className="text-slate-500 font-mono">0{i+1}</span>
                               <span className="text-white font-medium">{t.name}</span>
                             </div>
                             <div className="flex items-center gap-4">
                               <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">{t.niche}</span>
                               <span className="text-green-400 font-bold">+{t.growth}%</span>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentView === AppView.ANALYZER && <TrendAnalyzer />}
                {currentView === AppView.CALCULATOR && <TrendScoreCalculator />}
                {currentView === AppView.COURSE && <ModuleViewer />}
                {currentView === AppView.PROMPTS && <PromptLibrary />}
                {currentView === AppView.PRICING && <Pricing />}
             </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
