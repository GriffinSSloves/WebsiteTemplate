import { AppLayout } from '@/layouts/AppLayout1'
import { createBrowserRouter } from 'react-router-dom'

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: []
    }
])
