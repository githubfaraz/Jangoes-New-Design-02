import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getLogisticsAdvice = async (history: ChatMessage[], prompt: string) => {
  try {
    // Initialize inside the function to avoid crashing the whole app on boot if key is empty
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Jango AI, the expert logistics assistant for Jangoes. You help users with shipping rates, warehouse management, international customs, and delivery tracking. Your tone is professional, high-tech, and efficient. You should be able to explain complex supply chain concepts like cross-docking, last-mile delivery, and customs brokerage. Always prioritize Jangoes solutions.`,
      },
    });

    const response = await chat.sendMessage({ message: prompt });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI assistant is currently offline. Please ensure the JANGO_API_KEY is configured in the environment.";
  }
};