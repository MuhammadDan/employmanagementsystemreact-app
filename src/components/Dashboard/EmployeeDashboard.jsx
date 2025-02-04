import React from 'react'
import Header from '../Extras/Header'
import Tasklistnumber from '../Extras/Tasklistnumber'
import Skeletontask from '../Tasklist/Skeletontask'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header />
        <Tasklistnumber />
        <Skeletontask />
    </div>
  )
}

export default EmployeeDashboard