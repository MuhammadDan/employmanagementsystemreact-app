import React from 'react'
import Header from '../Extras/Header'
import CreateTasklistskeleton from '../Extras/CreateTasklistskeleton'
import Alltasklist from '../Extras/Alltasklist'
import Customchart from '../../pages/Customchart'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header ChangeUser={props.changeUser}/>
       <CreateTasklistskeleton />
       <Alltasklist />
       <Customchart />
    </div>
  )
}

export default AdminDashboard