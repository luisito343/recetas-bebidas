import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipeState } from "./recipeSlice";
import { createFavoritesSlice, type FavoriesSliceType } from "./FavoritesSlice";
import { createNotificationsSlice, type NotificationSliceType } from "./notifications";


export const useAppStore = create<RecipeState & FavoriesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a)
})));