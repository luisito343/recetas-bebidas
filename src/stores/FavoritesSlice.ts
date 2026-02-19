import type { StateCreator } from 'zustand';
import type { Recipe } from '../types';

export type FavoriesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void
}


export const createFavoritesSlice: StateCreator<FavoriesSliceType> = (set) => ({
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : [],
    handleClickFavorite: (recipe) => {
        if(recipe.idDrink) {
            set((state) => {
                const isAlreadyFavorite = state.favorites.some(fav => fav.idDrink === recipe.idDrink);
                if(isAlreadyFavorite) {
                    const updatedFavorites = state.favorites.filter(fav => fav.idDrink !== recipe.idDrink);
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                    return {
                        favorites: updatedFavorites
                    }
                } else {
                    const updatedFavorites = [...state.favorites, recipe];
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                    return {
                        favorites: updatedFavorites
                    }
                }
            });
        }
    }
})