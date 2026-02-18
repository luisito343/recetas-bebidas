import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipeState } from "./recipeSlice";


export const useAppStore = create<RecipeState>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})));