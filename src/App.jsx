import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sudoku</h1>
      <h2>By Christopher Vazquez, Charles Hall, and Trevor Leung for CMSI 2021</h2>
      
      /** This is the start of the sudoku box, dividing it up by rows. */
      <div id="sudoku-box" class="main-box">
        <div class="large row">
        <div class="small row"></div>
        <div class="small row"></div>
        <div class="small row"></div>
        </div>
      </div>

    </>
  )
}

export default App
