import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-5'>
    <h1 className='flex justify-center mt-12 text-3xl'> Learn about redux toolkit </h1>
    <AddTodo />
    <Todos />
    </div>
  )
}

export default App
