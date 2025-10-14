import { useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [stateCount , setStateCount] = useState(0)
  
  const refCount = useRef(0)


  // When you click “Increment useState”, the number updated immediately
  const incrementuseState = () => {
    setStateCount(stateCount + 1)
  }


  // When you click “Increment useRef”, the number doesn’t change in the UI, you can verify it by seeing output in console
  const incrementuseRef = () => {
    refCount.current += 1
    console.log("Ref Count:", refCount.current)
  }

  return (
    <div className='p-4'>

      <h1 className='text-xl font-bold mb-4'> useState vs useRef </h1>

        <p className='font-medium'>State Count: {stateCount} </p>
        <p className='font-medium'> Ref Count: {refCount.current} </p>

        <div className='mt-4'>
          <button className='bg-blue-500 text-white px-3 rounded' onClick={incrementuseState}>Increment useState</button>
          <br />
          <button className='bg-green-500 text-white px-3 py-1 rounded mt-1' onClick={incrementuseRef}>Increment useRef</button>
        </div>

    </div>
  )
}

export default App
