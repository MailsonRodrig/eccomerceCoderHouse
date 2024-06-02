

import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  return (
    <>
      <div>
        <img onClick={() => {
          setCounter(counter + 1)
        }} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" style={{ height: 30 }} />
        <h1>{counter}</h1>
        <img onClick={() => {
          setCounter(counter - 1)
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6fMJ_hSHmdAMNW2DbJFG3FR7ysiU84upDQ&s" alt="" style={{ height: 30 }} />
      </div>
    </>
  )
}

export default App
