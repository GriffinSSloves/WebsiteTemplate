import { Button } from '@/components/ui/button'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    const logError = () => {}

    const goToRandomPage = () => {}

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <div>
                <Button onClick={logError}>Tell Griffin so he can fix it</Button>
                <Button onClick={goToRandomPage} variant={'secondary'}>
                    Go to a random page
                </Button>
            </div>
        </div>
    )
}
