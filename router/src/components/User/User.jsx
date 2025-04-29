import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
    console.log(userId);
    

  return (
    <div className='bg-gray-300 text-white text-2xl mx-auto justify-center'>User : {userId}</div>
  )
}

export default User