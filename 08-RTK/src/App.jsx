import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementByAmount, incrementCount, reset } from './Features/countTodo'


function App() {
  
  const dispatch = useDispatch()
  const counter = useSelector(state => state.value)

  const [amount , setAmount] = useState('')

  return (
   <div>
    <h1> Redux Practice </h1>
    <div>
      <button onClick={()=>dispatch(incrementCount())}>
        Add value
      </button>
      <br />
      <button onClick={()=>dispatch(decrementCount())}>
        Remove Value
      </button>
      <br />  
      
      <div>
        <input
        className='border m-5 bg-black text-white px-3 py-3'
        type="number"
        onChange={(e)=>setAmount(e.target.value)}
        value={amount}
        placeholder='Enter the amount'
        />
        <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>
          Increment By Amount
        </button>
      </div>

    </div>
    <div className='mt-3'>
      Counter Value: {counter}
    </div>

    <div className='mt-3'>
      <button onClick={()=>dispatch(reset())}>
        Reset the count
      </button>
    </div>

   </div>
  )
}

export default App
