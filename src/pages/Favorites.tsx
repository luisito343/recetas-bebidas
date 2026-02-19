import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export const Favorites = () => {
    const favorites = useAppStore((state) => state.favorites);

    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])

    return (
        <div className="bg-slate-900 min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-5 py-10">
                <h1 className="text-4xl font-extrabold text-white border-b border-slate-700 pb-4">
                    Favoritos
                </h1>

                {hasFavorites ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        {favorites.map((drink) => (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-20 text-center">
                        <p className="text-slate-400 text-xl">
                            Aún no tienes bebidas en favoritos. ¡Explora el inicio y agrega algunas!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
