import React from 'react'
import Header from '../Extras/Header'
import CreateTasklistskeleton from '../Extras/CreateTasklistskeleton'
import Alltasklist from '../Extras/Alltasklist'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
       <CreateTasklistskeleton />
       <Alltasklist />
    </div>
  )
}

export default AdminDashboard