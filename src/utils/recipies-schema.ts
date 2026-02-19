import { z } from 'zod';

// Esquema para un solo objeto de categoría
export const CategorySchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
});

export const CategoryListSchema = z.array(z.object({
    strCategory: z.string()
}));

export const SearchRecipiesSchema = z.object({
    ingredient: z.string().min(1, "El campo de ingrediente no puede estar vacío"),
    category: z.string().min(1, "El campo de categoría no puede estar vacío")
});

export const DrinkSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksListSchema = z.object({
    drinks: z.array(DrinkSchema)
});

export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
});

export const DrinksAPIResponseSchema = z.object({
    drinks: z.array(RecipeAPIResponseSchema)
});

export const FavoritesListSchema = z.array(RecipeAPIResponseSchema);

