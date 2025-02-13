import React from 'react'

const Tasklistnumber = ({UserLoggedInData}) => {
  // console.log(UserLoggedInData);
  
  return (
    <>
    <div className='flex mt-10 justify-between gap-5'>
        <div className='w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
          <h2 className='text-2xl font-semibold'>{UserLoggedInData.taskNumbers.active}</h2>
          <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
          <h2 className='text-2xl font-semibold'>{UserLoggedInData.taskNumbers.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
          <h2 className='text-2xl font-semibold'>{UserLoggedInData.taskNumbers.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
          <h2 className='text-2xl font-semibold'>{UserLoggedInData.taskNumbers.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
    </>
  )
}

export default Tasklistnumber