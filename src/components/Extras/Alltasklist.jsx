import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider';

const Alltasklist = () => {
    const Admintdata = useContext(Authcontext);
     
  return (
    <div id='Alltask' className='bg-[#1c1c1c] p-5 rounded mt-5 '>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
     <div className=''>
     {
            Admintdata.employeedata.map((item)=>{
                return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>{item.Firstname}</h2>
                <h3 className='w-1/5 text-lg font-medium text-white'>{item.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{item.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-lg font-medium text-green-600'>{item.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium text-blue-400'>{item.taskNumbers.failed}</h5>
            </div>
            })
        }
     </div>
    </div>
  )
}

export default Alltasklist