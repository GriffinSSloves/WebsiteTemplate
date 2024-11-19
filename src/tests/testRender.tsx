import { appRoutes, routerConfig } from '@/lib/router'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom'

type TestRenderOptions = {
    renderOptions?: RenderOptions
}

// Wraps the UI in a test router provider and other providers
export const testRender = (ui: ReactElement, options: TestRenderOptions = {}) => {
    const { renderOptions = {} } = options

    const testRoutes: RouteObject[] = [
        ...appRoutes,
        {
            path: '/test',
            element: ui
        }
    ]

    return testRenderWithAppRoutes({ initialRoute: '/test', routes: testRoutes, renderOptions })
}

type TestRenderWithAppRoutesOptions = {
    initialRoute?: string
    routes?: RouteObject[]
    renderOptions?: RenderOptions
}

// Specifically for testing the real app routes with the router
export const testRenderWithAppRoutes = (options: TestRenderWithAppRoutesOptions = {}) => {
    const { initialRoute = '/', routes = appRoutes, renderOptions = {} } = options

    const router = createMemoryRouter(routes, {
        initialEntries: [initialRoute],
        ...routerConfig
    })

    // Wrap this in any other Providers we need
    const uiWithProviders = <RouterProvider router={router} />

    return {
        user: userEvent.setup(),
        router,
        ...render(uiWithProviders, renderOptions)
    }
}
