import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { IndexLayout } from "./components/IndexLayout";


const HomePage = lazy(() =>
    import("./pages/HomePage").then((module) => ({ default: module.HomePage }))
);

const Favorites = lazy(() =>
    import("./pages/Favorites").then((module) => ({ default: module.Favorites }))
);

const GenerateAI = lazy(() =>
    import("./pages/GenerateIA").then((module) => ({ default: module.GenerateAI }))
);



const AppRouter = createBrowserRouter([
    //Main route
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<p className="text-center py-10">Cargando página...</p>}>
                        <HomePage />
                    </Suspense>
                )
            },
            {
                path: 'favorites',
                element: (
                    <Suspense fallback={<p className="text-center py-10">Cargando página...</p>}>
                        <Favorites />
                    </Suspense>
                )
            },
            {
                path: 'generate-ai',
                element: (
                    <Suspense fallback={<p className="text-center py-10">Cargando página...</p>}>
                        <GenerateAI />
                    </Suspense>
                )
            }
        ]
    }
])


export default AppRouter;