import { Outlet } from 'react-router-dom'
import { AppFooter } from './AppFooter1'
import { AppHeader } from './AppHeader1'

export const AppLayout = () => {
    return (
        <div>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </div>
    )
}
