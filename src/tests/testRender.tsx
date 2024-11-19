import { appRoutes, routerConfig } from '@/lib/router'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom'

type TestRenderOptions = {
    renderOptions?: RenderOptions
}

export const testRender = (ui: ReactElement, options: TestRenderOptions = {}) => {
    const { renderOptions = {} } = options

    const testRoutes: RouteObject[] = [
        ...appRoutes,
        {
            path: '/test',
            element: ui
        }
    ]

    return testRenderWithAppRoutes(ui, { initialRoute: '/test', routes: testRoutes, renderOptions })
}

type TestRenderWithAppRoutesOptions = {
    initialRoute?: string
    routes?: RouteObject[]
    renderOptions?: RenderOptions
}

export const testRenderWithAppRoutes = (ui: ReactElement, options: TestRenderWithAppRoutesOptions = {}) => {
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
