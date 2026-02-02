
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

    // Correctly calling generateContent with model name and contents directly
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

    // Access the .text property directly (not as a function)
    return response.text || "I'm sorry, I couldn't process that. How else can I help you today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my brain right now. Please try again later!";
  }
};
