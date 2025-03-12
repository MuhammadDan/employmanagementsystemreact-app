import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider';

const Alltasklist = () => {
    const [UserData,setUserData] = useContext(Authcontext);
    // console.log(UserData)
     
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
     {/* {
            UserData.map((item,idx)=>{
                return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>{item.Firstname}</h2>
                <h3 className='w-1/5 text-lg font-medium text-white'>{item.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{item.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-lg font-medium text-green-600'>{item.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium text-blue-400'>{item.taskNumbers.failed}</h5>
            </div>
            })
        } */}
        {
  UserData?.map((item, idx) => {
    const taskNumbers = item?.taskNumbers || {}; // Ensure taskNumbers exists

    return (
      <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">{item?.Firstname || "N/A"}</h2>
        <h3 className="w-1/5 text-lg font-medium text-white">{taskNumbers.newTask ?? 0}</h3>
        <h5 className="w-1/5 text-lg font-medium text-yellow-400">{taskNumbers.active ?? 0}</h5>
        <h5 className="w-1/5 text-lg font-medium text-green-600">{taskNumbers.completed ?? 0}</h5>
        <h5 className="w-1/5 text-lg font-medium text-blue-400">{taskNumbers.failed ?? 0}</h5>
      </div>
    );
  })
}
     </div>
    </div>
  )
}

export default Alltasklist 