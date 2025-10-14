import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
    setCounter(counter)
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1
    setCounter(counter)
    }
    
  }

  return (
    <>
      
      <h1> chai aur react </h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>

      <h3> Value: {counter} </h3>
      
    </>
  )
}

export default App
