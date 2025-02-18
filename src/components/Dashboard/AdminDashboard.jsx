import React from 'react'
import Header from '../Extras/Header'
import CreateTasklistskeleton from '../Extras/CreateTasklistskeleton'
import Alltasklist from '../Extras/Alltasklist'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header ChangeUser={props.changeUser}/>
       <CreateTasklistskeleton />
       <Alltasklist />
    </div>
  )
}

export default AdminDashboard