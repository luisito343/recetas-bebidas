export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-700 pb-8">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start">
                            <img src="/logo.svg" alt="Logo" className="w-8 h-8 opacity-80" />
                            <span className="ml-2 text-xl font-bold tracking-tight">
                                Bebidas<span className="text-orange-500">App</span>
                            </span>
                        </div>
                        <p className="mt-2 text-slate-400 text-sm">
                            Encuentra las mejores recetas para tus momentos especiales.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-orange-400 transition-colors text-sm">Privacidad</a>
                        <a href="#" className="hover:text-orange-400 transition-colors text-sm">Términos</a>
                        <a href="#" className="hover:text-orange-400 transition-colors text-sm">Contacto</a>
                    </div>
                </div>

                <div className="mt-8 text-center text-slate-500 text-xs uppercase tracking-widest">
                    &copy; {year} - Desarrollado con ❤️ y sabor tropical
                </div>
            </div>
        </footer>
    );
}
