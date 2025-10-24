import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const { setUser, user } = useContext(UserContext)

    const handleSubmit = (e) =>{
      e.preventDefault()
      setUser({ username, password })
    }

    console.log(user)

  return (
    <div>
      <h2> Login </h2>
      <input style={{ padding: "5px", margin: "8px" }}
      type='text' 
      placeholder='username' 
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      />
      <br />
      <input style={{ padding: "5px" }} 
      type='password' 
      placeholder='password' 
      value={password} 
      onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      <button style={{background: "black", color:"white", margin:"8px"}} onClick={handleSubmit}>
        submit
      </button>
    </div>
  )
}

export default Login
