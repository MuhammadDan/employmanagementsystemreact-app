import React from 'react'
import Header from '../Extras/Header'
import Tasklistnumber from '../Extras/Tasklistnumber'
import Skeletontask from '../Tasklist/Skeletontask'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header ChangeUser={props.changeUser} UserLoggedInData={props.UserLoggedInData}/>
        <Tasklistnumber UserLoggedInData={props.UserLoggedInData}/>
        <Skeletontask UserLoggedInData={props.UserLoggedInData}/>
    </div>
  )
}

export default EmployeeDashboard