import { CopyButton } from "../components/CopyButton";
import { useAppStore } from "../stores/useAppStore";

export function GenerateAI() {

    const showNotification = useAppStore((state) => state.showNotification);
    const generateRecipe = useAppStore((state) => state.generateRecipe);
    const recipe = useAppStore((state) => state.recipe);
    const isGenerating = useAppStore((state) => state.isGenerating);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const prompt = formData.get("prompt") as string;
        if (!prompt) {
            showNotification("Por favor, ingresa un prompt válido.", true);
            return;
        }
        await generateRecipe(prompt);
        form.reset();

    }

    return (
        <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
            {/* Encabezado Mejorado */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
                    Generar Receta con <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">IA</span>
                </h1>
                <p className="text-slate-500 mt-2 text-lg">Crea combinaciones únicas en segundos</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2">

                <form
                    onSubmit={handleSubmit}
                    className='relative group'
                >
                    <div className="relative flex items-center">
                        <input
                            name="prompt"
                            id="prompt"
                            className="w-full pl-6 pr-16 py-5 bg-slate-50 border-none focus:ring-2 focus:ring-purple-500 rounded-xl text-lg transition-all outline-none placeholder:text-slate-400"
                            placeholder="Ej. Bebida con Tequila y Fresa..."
                        />

                        <button
                            type="submit"
                            aria-label="Enviar"
                            disabled={isGenerating}
                            className="absolute right-3 p-2 bg-slate-800 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-md group-hover:scale-105 disabled:opacity-50 disabled:hover:bg-slate-800 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Resultado de la IA</span>
                <CopyButton text={recipe} />
            </div>

            {/* Area de Resultados */}
            <div className="mt-10 p-6 bg-white rounded-xl border border-dashed border-slate-200 min-h-50 whitespace-pre-wrap">
                <p className="text-slate-700 text-start italic">
                    {recipe ? recipe : isGenerating ? "Generando receta..." : "Aquí aparecerá la receta generada por la IA."}
                </p>
            </div>
        </div >
    )
}