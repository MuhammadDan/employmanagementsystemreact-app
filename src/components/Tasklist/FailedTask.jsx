import React from 'react'

const FailedTask = ({Taskdata}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
   <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{Taskdata.category}</h3>
   <h4 className='text-sm'>{Taskdata.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{Taskdata.taskTitle}</h2>
    <p className='text-sm mt-2'>{Taskdata.taskDescription}</p>
   <div className='mt-4'>
      <button className='bg-green-500 py-1 px-2 text-sm'>Failed</button>
   </div>
   </div>
  )
}

export default FailedTask