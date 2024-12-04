import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <title>Sudoku</title>
      <author>By Christopher Vazquez, Charles Hall, and Trevor Leung for CMSI 2021</author>
      </header>

      <body>

      /** This is the start of the sudoku box, dividing it up by rows. */
      <div id="sudoku-box" class="main-box">
        <div class="large row">
        <div class="small row"></div>
        <div class="small row"></div>
        <div class="small row"></div>
        </div>
      </div>
      </body>

      <footer>
      <ending>uses Sudoku </ending>
      </footer>

    </>
  )
}

export default App