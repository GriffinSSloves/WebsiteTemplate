import { AppLayout } from '@/layouts/AppLayout'
import { BlogPage } from '@/pages/content/BlogPage'
import { HomePage } from '@/pages/content/HomePage'
import { ErrorPage } from '@/pages/system/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

export const AppRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: 'blog',
                    element: <BlogPage />
                }
            ],
            errorElement: <ErrorPage />
        }
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true
        }
    }
)
