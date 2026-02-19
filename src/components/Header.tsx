import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { DrinksForm } from './DrinksForm';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="bg-[url('/bg.jpg')] shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src="/logo.svg"
                        alt="Bebidas Tropicales Logo"
                        className="w-12 h-12"
                    />
                    <span className="ml-3 text-2xl font-black text-white uppercase tracking-tighter">
                        Drink<span className="text-yellow-300">Hub</span>
                    </span>
                </div>

                <button
                    type="button"
                    className="md:hidden text-white"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="favorites"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Favoritos
                    </NavLink>
                    <NavLink
                        to="generate-ai"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Generar con IA
                    </NavLink>
                </nav>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden px-6 pb-4 flex flex-col gap-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="favorites"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Favoritos
                    </NavLink>
                    <NavLink
                        to="generate-ai"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-300 font-bold uppercase' : 'text-white hover:text-yellow-200 font-bold uppercase transition-colors'
                        }
                    >
                        Generar con IA
                    </NavLink>
                </nav>
            )}

            {isHome && <DrinksForm />}
        </header>
    );
}
