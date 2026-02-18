import axios from "axios";
import { CategorySchema, DrinksAPIResponseSchema, DrinksListSchema } from "../utils/recipies-schema";
import type { SearchFilter } from "../types";

const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getCategories = async () => {
    try {
        const response = await axios.get(`${URL}/list.php?c=list`);;
        const parsed = CategorySchema.safeParse(response.data);

        if (!parsed.success) {
            console.error("Error parsing categories:", parsed.error);
            return [];
        }

        return parsed.data.drinks;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export const searchRecipies = async (searchFilters: SearchFilter) => {
    try {
        const { ingredient, category } = searchFilters;
        const { data } = await axios.get(`${URL}/filter.php?i=${ingredient}&c=${category}`);

        const parsed = DrinksListSchema.safeParse(data);

        if(!parsed.success) {
            console.error("Error parsing drinks:", parsed.error);
            return [];
        }
        return parsed.data.drinks;
    } catch (error) {
        console.error("Error searching recipes:", error);
    }
}

export const getRecipeDetails = async (id: string) => {
    try {
        const { data } = await axios.get(`${URL}/lookup.php?i=${id}`);
        const parsed = DrinksAPIResponseSchema.safeParse(data);

        if (!parsed.success) {
            console.error("Error parsing recipe details:", parsed.error);
            return null;
        }
        return parsed.data.drinks[0];
    } catch (error) {
        console.error("Error fetching recipe details:", error);
    }
}
