import React, { useState } from 'react'

const Header = ({UserLoggedInData}) => {
  // console.log(UserLoggedInData);
  //  const [Username, setUsername] = useState("")
  // if(!UserLoggedInData){
  //      setUsername("Admin")
  // }else{
  //   setUsername(UserLoggedInData.Firstname)
  // }
  const logoutuser = ()=>{
    localStorage.setItem("loggedInUser","")
    window.location.reload()
  }
  return (
    <>
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>Username 👋</span></h1>
        <button onClick={logoutuser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md'>Log Out</button>
    </div>
    </>
  )
}

export default Header