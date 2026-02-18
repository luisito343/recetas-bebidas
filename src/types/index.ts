import { z } from "zod";
import type {
    CategoryListSchema,
    DrinkSchema,
    RecipeAPIResponseSchema,
    SearchRecipiesSchema
} from "../utils/recipies-schema";

export type Category = z.infer<typeof CategoryListSchema>
export type SearchFilter = z.infer<typeof SearchRecipiesSchema>
export type Drink = z.infer<typeof DrinkSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;