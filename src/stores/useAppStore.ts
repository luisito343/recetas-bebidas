import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipeState } from "./recipeSlice";
import { createFavoritesSlice, type FavoriesSliceType } from "./FavoritesSlice";
import { createNotificationsSlice, type NotificationSliceType } from "./notifications";
import { createAISlice, type AIState } from "./aiSlices";


export const useAppStore = create<RecipeState & FavoriesSliceType & NotificationSliceType & AIState>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a),
    ...createAISlice(...a)
})));