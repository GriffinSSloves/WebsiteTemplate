import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { GErrorBoundary } from './components/app/GErrorBoundary.tsx'

const add = (a: number, b: number) => {
    if (a === 0) {
        throw new Error('a is zero')
    }
    return a + b
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={GErrorBoundary}>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
