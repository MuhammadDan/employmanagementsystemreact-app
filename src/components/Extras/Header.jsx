import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>Muskan 👋</span></h1>
        <button className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md'>Log Out</button>
    </div>
    </>
  )
}

export default Header