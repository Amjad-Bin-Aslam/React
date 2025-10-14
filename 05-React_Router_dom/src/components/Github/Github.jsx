import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/Amjad-Bin-Aslam')
        .then((response)=>{
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setData(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <div className='flex flex-col text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <img className='rounded-full w-25' src={data.avatar_url} alt="Git picture" />
      <p> Github name: { data.login } </p>
      <p> Repositories: { data.public_repos } </p>
      <p> Github followers: { data.followers } </p>
    </div>
  )
}

export default Github

