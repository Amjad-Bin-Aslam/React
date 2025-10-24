import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

  const { user } = useContext(UserContext)

  if(!user) return <div> Please login </div>

  return (
    <div>
      Welcome { user.username }
    </div>
  )
}

export default Profile
