import { Outlet } from 'react-router-dom'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

export const AppLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <AppHeader />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <AppFooter />
        </div>
    )
}
