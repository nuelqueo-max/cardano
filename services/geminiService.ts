import { GoogleGenAI, Type } from "@google/genai";
import { TrendAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeNicheTrends = async (niche: string): Promise<TrendAnalysisResult> => {
  if (!apiKey) {
    // Fallback for demo purposes if no key is present in environment
    console.warn("No API Key found. Returning mock data.");
    return mockAnalysis(niche);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Atue como um especialista em análise de mercado e tendências futuras.
      Analise o nicho: "${niche}".
      Identifique 5 tendências emergentes ou sub-nichos com alto potencial lucrativo.
      Para cada tendência, forneça:
      - Nome
      - Uma breve descrição (máx 20 palavras)
      - Potencial de Crescimento (0 a 100)
      - Nível de Saturação Atual (0 a 100, onde 0 é inexplorado e 100 é saturado)
      - Categoria (ex: Produto, Serviço, Conteúdo)
      
      Forneça também um resumo geral da análise de 1 parágrafo.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            niche: { type: Type.STRING },
            summary: { type: Type.STRING },
            trends: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  description: { type: Type.STRING },
                  growthPotential: { type: Type.INTEGER },
                  saturation: { type: Type.INTEGER },
                  category: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as TrendAnalysisResult;

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return mockAnalysis(niche);
  }
};

const mockAnalysis = (niche: string): TrendAnalysisResult => {
  return {
    niche,
    summary: `Análise simulada para ${niche}. O mercado apresenta oportunidades de micro-nichos ainda pouco explorados no Brasil, especialmente focados em personalização e experiências premium.`,
    trends: [
      {
        name: "Micro-SaaS para " + niche,
        description: "Ferramentas simples que resolvem dores específicas deste público.",
        growthPotential: 88,
        saturation: 20,
        category: "Software"
      },
      {
        name: "Comunidades Pagas (High Ticket)",
        description: "Networking exclusivo para profissionais deste setor.",
        growthPotential: 75,
        saturation: 45,
        category: "Comunidade"
      },
      {
        name: "Kits de " + niche + " DIY",
        description: "Produtos faça-você-mesmo com curadoria premium.",
        growthPotential: 92,
        saturation: 15,
        category: "E-commerce"
      },
      {
        name: "Conteúdo Short-Form Educativo",
        description: "Tutoriais rápidos de 60s focados em hacks do nicho.",
        growthPotential: 60,
        saturation: 80,
        category: "Conteúdo"
      },
      {
        name: "Consultoria Híbrida com IA",
        description: "Serviços de consultoria acelerados por ferramentas de IA.",
        growthPotential: 95,
        saturation: 5,
        category: "Serviço"
      }
    ]
  };
};
