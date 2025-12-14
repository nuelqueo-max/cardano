import { CourseModule, AiPrompt } from './types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'm1',
    title: 'Módulo 1: Fundamentos',
    description: 'O que são tendências e por que elas geram dinheiro. Diferença entre modinha x tendência real.',
    duration: '45 min',
    lessons: ['O segredo do dinheiro invisível', 'Modinha vs. Tendência Real', 'Como a IA vê o futuro']
  },
  {
    id: 'm2',
    title: 'Módulo 2: Ferramentas de IA',
    description: 'Dominando ChatGPT, Google Trends e ferramentas de espionagem de mercado.',
    duration: '60 min',
    lessons: ['Setup do ChatGPT para Análise', 'Google Trends + IA', 'Radar de Redes Sociais (TikTok/Reels)']
  },
  {
    id: 'm3',
    title: 'Módulo 3: Sistema TrendAI',
    description: 'O Método em 5 passos para filtrar o ouro da areia.',
    duration: '90 min',
    lessons: ['Coleta Automática', 'Filtro de Potencial Financeiro', 'Validação Relâmpago']
  },
  {
    id: 'm4',
    title: 'Módulo 4: Prompts Milionários',
    description: 'Copie e cole nossos prompts para descobrir mercados quentes em segundos.',
    duration: '30 min',
    lessons: ['Engenharia de Prompt para Mercados', 'Prevendo a Saturação', 'Criando Ofertas Irresistíveis']
  },
  {
    id: 'm5',
    title: 'Módulo 5: Monetização',
    description: 'Transformando dados em dinheiro no bolso.',
    duration: '75 min',
    lessons: ['Produtos Digitais & Infoprodutos', 'Estratégia para Afiliados', 'Dropshipping Moderno']
  },
  {
    id: 'm6',
    title: 'Módulo 6: Automação',
    description: 'Deixe a IA trabalhar 24h por você monitorando o mercado.',
    duration: '50 min',
    lessons: ['Criando Alertas Automáticos', 'Dashboards Inteligentes']
  },
  {
    id: 'm7',
    title: 'Módulo 7: Casos Reais',
    description: 'Estudos de caso de quem fez milhões com tendências antecipadas.',
    duration: '40 min',
    lessons: ['O Caso do Fidget Spinner', 'A Onda dos PLRs', 'Erros que Quebram Iniciantes']
  }
];

export const AI_PROMPTS: AiPrompt[] = [
  {
    id: 'p1',
    title: 'Detector de Oceanos Azuis',
    category: 'Discovery',
    content: 'Atue como um analista de mercado sênior. Identifique 5 micro-nichos dentro do mercado de [SEU MERCADO] que estão começando a ganhar tração nos EUA mas ainda são desconhecidos no Brasil. Para cada um, estime o potencial de lucro (1-10) e a dificuldade de entrada.'
  },
  {
    id: 'p2',
    title: 'Análise de Dores Ocultas',
    category: 'Analysis',
    content: 'Analise os comentários negativos dos 10 produtos mais vendidos de [NICHO] na Amazon. Liste as 3 principais reclamações recorrentes e sugira um produto digital que resolva exatamente essas dores.'
  },
  {
    id: 'p3',
    title: 'Validador de Ideias',
    category: 'Analysis',
    content: 'Tenho uma ideia de produto: [SUA IDEIA]. Critique brutalmente essa ideia baseando-se em princípios de economia comportamental. Liste 3 razões pelas quais ela falharia e 3 formas de torná-la à prova de falhas.'
  },
  {
    id: 'p4',
    title: 'Gerador de Viralidade',
    category: 'Marketing',
    content: 'Crie 5 roteiros de TikTok de 30 segundos usando o gancho "Você sabia que..." para vender [SEU PRODUTO]. Use gatilhos mentais de curiosidade e urgência.'
  },
  {
    id: 'p5',
    title: 'Previsor de Saturação',
    category: 'Analysis',
    content: 'Analise o ciclo de vida da tendência [TENDÊNCIA]. Baseado em padrões históricos de tendências similares, estime em quantos meses ela atingirá o pico de saturação e sugira qual deve ser a "próxima onda" relacionada.'
  }
];
