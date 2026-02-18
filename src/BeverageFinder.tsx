import { RouterProvider } from 'react-router/dom'
import AppRouter from './App.router'

export const BeverageFinder = () => {
    return (
        <RouterProvider router={AppRouter} />
    )
}
