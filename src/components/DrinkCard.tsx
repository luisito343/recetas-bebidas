import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

interface DrinkCardProps {
    drink: Drink
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {

    const selectrecipe = useAppStore((state) => state.selectrecipe);

    return (
        <div className="border shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`}
                    className="w-full h-64 object-cover"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white uppercase rounded-lg transition-colors"
                    onClick={() => selectrecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    )
}