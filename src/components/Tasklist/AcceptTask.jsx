import React from 'react'

const AcceptTask = ({Taskdata}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-orange-400 rounded-xl'>
        <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{Taskdata.category}</h3>
       <h4 className='text-sm'>{Taskdata.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{Taskdata.taskTitle}</h2>
        <p className='text-sm mt-2'>{Taskdata.taskDescription}</p>
       <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
       </div>
       </div>
  )
}

export default AcceptTask