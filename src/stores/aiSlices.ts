import type { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AIState = {
    recipe: string;
    isGenerating: boolean;
    generateRecipe: (prompt: string) => Promise<void>;
}

export const createAISlice: StateCreator<AIState> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({ recipe: '' }); 
        const data = await AIService.generateRecipe(prompt);
        set({ isGenerating: true });
        for await (const chunk of data) {
            set((state)=>({
                recipe: state.recipe + chunk
            }));
        }
        set({ isGenerating: false });

    }
})