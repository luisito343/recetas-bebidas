import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router';
import { DrinksForm } from './DrinksForm';

export default function Header() {

    const { pathname } = useLocation();

    console.log('Current Path:', pathname);

    const isHome = useMemo(() => pathname === '/', [pathname]);

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

                {/* Navigation */}
                <nav className="flex gap-8">
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
                </nav>
            </div>
            {isHome && <DrinksForm />}
        </header>
    );
}
