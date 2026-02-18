import type { StateCreator } from "zustand"
import { getCategories, getRecipeDetails, searchRecipies } from "../services/RecipeService"
import type { Category, Drink, Recipe, SearchFilter } from "../types"

export type RecipeState = {
    catgeories: Category,
    drinks: Drink[],
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>,
    searchRecipies: (searchFilters: SearchFilter) => Promise<void>,
    selectrecipe: (id: Drink['idDrink']) => Promise<void>,
    closeModal: () => void
}

export const createRecipesSlice: StateCreator<RecipeState> = (set) => ({
    catgeories: [],
    drinks: [],
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const result = await getCategories();
        set({ catgeories: result });
    },
    searchRecipies: async (filter) => {
        const result = await searchRecipies(filter);
        set({ drinks: result || [] });
    },
    selectrecipe: async (id) => {
        const recipie = await getRecipeDetails(id);
        set({ selectedRecipe: recipie || {} as Recipe });
        set({ modal: true });
    },
    closeModal: () => {
        set({ modal: false });
        set({ selectedRecipe: {} as Recipe });
    }
})