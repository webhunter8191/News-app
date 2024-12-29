import { useState } from 'react'
import Navbar from './components/Navbar'
import NewBoard from './components/NewBoard'
import './App.css'

function App() {
  const [category, setCategory] = useState("general")


  return (
    <>
      <Navbar setCategory={setCategory} />
      <div className='text-center'>
        <NewBoard category={category} />
      </div>
    </>
  )
}

export default App
