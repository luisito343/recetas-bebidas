import { useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export const DrinksForm = () => {
    const [searchTerm, setSearchTerm] = useState({ ingredient: "", category: "" });
    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const categories = useAppStore((state) => state.catgeories);
    const searchRecipies = useAppStore((state) => state.searchRecipies);
    const showNotification = useAppStore((state) => state.showNotification);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchTerm((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(searchTerm).some(value => value.trim() === "")) {
            showNotification('Por favor, completa los campos de búsqueda', true);
            return;
        }

        searchRecipies(searchTerm);
    }

    return (
        <form 
        className="md:w-1/2 2xl:w-1/3 p-10 rounded-2xl"
        onSubmit={handleSubmit}
        >
            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="ingredient"
                        className="block text-white uppercase font-extrabold text-lg"
                    >Nombre o Ingredientes</label>
                    <input
                        id="ingredient"
                        name="ingredient"
                        onChange={handleChange}
                        value={searchTerm.ingredient}
                        type="text"
                        placeholder="Ej: Tequila, Vodka, Café..."
                        className="p-3 w-full rounded-lg focus:outline-none bg-white mt-2 shadow-inner"
                    />
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="block text-white uppercase font-extrabold text-lg"
                    >Categoría</label>
                    <select
                        id="category"
                        name="category"
                        onChange={handleChange}
                        value={searchTerm.category}
                        className="p-3 w-full rounded-lg focus:outline-none bg-white mt-2 shadow-inner"
                    >
                        <option value="">-- Seleccione --</option>
                        
                        {categories.map((category) => (
                            <option key={category.strCategory} value={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-black p-3 w-full rounded-xl uppercase transition-all shadow-lg transform active:scale-95"
                >
                    Buscar Recetas
                </button>
            </div>
        </form>
    )
}
