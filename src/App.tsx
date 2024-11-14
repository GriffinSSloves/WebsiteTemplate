import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import { AppRouter } from './lib/router'

function App() {
    return (
        <div>
            <RouterProvider router={AppRouter} future={{ v7_startTransition: true }} />
        </div>
    )
}

export default App
