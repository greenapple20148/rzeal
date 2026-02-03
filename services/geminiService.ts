
import { GoogleGenAI } from "@google/genai";
import { Job } from "../types";

// Always initialize GoogleGenAI with the apiKey property from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCareerAdvice = async (userPrompt: string, availableJobs: Job[]) => {
  try {
    const jobsContext = JSON.stringify(availableJobs.map(j => ({
      title: j.title,
      category: j.category,
      location: j.location
    })));

<<<<<<< HEAD
    // Correctly calling generateContent with model name and contents directly
=======
>>>>>>> 7940f96 (initial commit)
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are RZeal Career Co-pilot, an AI career advisor for RZeal Staffing. 
        Your goal is to help job seekers find the right roles and improve their career prospects.
        Context of currently available jobs: ${jobsContext}.
        Be professional, encouraging, and concise. If a user asks for a job, recommend one of the available roles if it fits, or give general career advice if no direct match exists.`,
        temperature: 0.7,
      },
    });

<<<<<<< HEAD
    // Access the .text property directly (not as a function)
=======
>>>>>>> 7940f96 (initial commit)
    return response.text || "I'm sorry, I couldn't process that. How else can I help you today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my brain right now. Please try again later!";
  }
};
<<<<<<< HEAD
=======

export const searchGlobalJobs = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Find the most recent and relevant job listings for: "${query}". Provide a summary of 3-5 roles with titles, companies, and key requirements.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.2,
      },
    });

    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Source',
      uri: chunk.web?.uri || '#'
    })).filter((s: any) => s.uri !== '#') || [];

    return { text, sources };
  } catch (error) {
    console.error("Global Job Search Error:", error);
    throw error;
  }
};
>>>>>>> 7940f96 (initial commit)
