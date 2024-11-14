import './App.css'
import { Button } from './components/ui/button'
import './index.css'

function App() {
    return (
        <div className='min-h-screen bg-gray-100 p-4'>
            <header className='bg-white shadow rounded-lg p-6 mb-8'>
                <h1 className='text-3xl font-bold text-gray-900'>My Website</h1>
            </header>
            <main className='max-w-4xl mx-auto'>
                <p className='text-gray-700'>I'm a work in progress that is still not finished. Check back soon.</p>
                <Button>Check out this sweet button though. Nice, huh?</Button>
            </main>
        </div>
    )
}

export default App
