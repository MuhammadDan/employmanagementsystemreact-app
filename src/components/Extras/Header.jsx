import React, { useState } from 'react'

const Header = (props) => {
  // console.log(UserLoggedInData);
  //  const [Username, setUsername] = useState("")
  // if(!UserLoggedInData){
  //      setUsername("Admin")
  // }else{
  //   setUsername(UserLoggedInData.Firstname)
  // }
  const logoutuser = ()=>{
    localStorage.setItem("loggedInUser","")
    props.ChangeUser('');// yai setuser ko khali kardega jo APP.jsx mai hai jismai userdata ka role define hoa hai wo jab khali hoga to login form khul jyega 
  }
  return (
    <>
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.UserLoggedInData?.Firstname || "Admin"}👋</span></h1>
        <button onClick={logoutuser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md'>Log Out</button>
    </div>
    </>
  )
}

export default Header