import { createBrowserRouter } from "react-router";
import { IndexLayout } from "./components/IndexLayout";
import { HomePage } from "./pages/HomePage";
import { Favorites } from "./pages/Favorites";

const AppRouter = createBrowserRouter([
    //Main route
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'favorites',
                element: <Favorites />
            }
        ]
    }
])


export default AppRouter;