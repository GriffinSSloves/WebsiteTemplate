import { ComponentType } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const GErrorBoundary: ComponentType<FallbackProps> = ({ error, resetErrorBoundary }) => {
    // TODO: add pic of me confused

    const logError = () => {
        console.log('Error logged', error)
    }

    return (
        <div>
            <h1>Something went wrong, my bad</h1>
            <button onClick={logError}>Tell Griffin so he can fix it</button>
            <button onClick={resetErrorBoundary}>Try again? It might not work, but give it a shot</button>
        </div>
    )
}
