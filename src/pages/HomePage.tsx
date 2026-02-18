import { useMemo, useState } from "react";
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard";

export const HomePage = () => {

    const drinks = useAppStore((state) => state.drinks);
    console.log("Drinks in HomePage:", drinks);

    // Estado para controlar cuántos elementos mostramos
    const [visibleCount, setVisibleCount] = useState(12)

    // Cortamos el arreglo original basado en el estado
    const displayedDrinks = useMemo(() => drinks.slice(0, visibleCount), [drinks, visibleCount])

    const hasDrinks = useMemo(() => drinks.length > 0, [drinks])

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container mx-auto py-16 px-6">
                {hasDrinks ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {displayedDrinks.map((drink) => (
                                <DrinkCard
                                    key={drink.idDrink}
                                    drink={drink}
                                />
                            ))}
                        </div>

                        {visibleCount < drinks.length && (
                            <div className="flex justify-center mt-16">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 12)}
                                    className="bg-slate-800 hover:bg-slate-900 text-white font-extrabold p-4 px-10 rounded-xl transition-all uppercase"
                                >
                                    Cargar más bebidas
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="my-10 text-center text-2xl font-bold text-slate-500">
                        No hay resultados aún, utiliza el formulario para buscar recetas.
                    </p>
                )}
            </main>
        </div>
    )
}
