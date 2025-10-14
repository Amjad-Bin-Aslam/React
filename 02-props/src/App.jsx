import { useState } from 'react'
import bg from './bg.jpg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name: 'zain',
    age: 18
  }

  return (
    <div>

      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-2'>
        Props
      </h1>

      <Card name="Amjad" btnText = "click me" />
      <Card  name="Zain" btnText = "Visit me" />

    </div>
  )
}

export default App
