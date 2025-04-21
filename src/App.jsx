import { useCallback, useEffect, useState } from 'react'

import './App.css'
import RandomJoke from './components/RandomJoke'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  //const [id, setId] = useState(0);

  return (
    <div >
      <Header />
      <main >
        <Outlet />
      </main>
    </div>
  )
}

export default App
