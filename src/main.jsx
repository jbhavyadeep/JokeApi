import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RandomJoke from './components/RandomJoke.jsx'
import JokeList from './components/JokeList.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <RandomJoke/>
            },
            {
                path: '/joke-list',
                element: <JokeList/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    
    <RouterProvider router={router}/>
)
