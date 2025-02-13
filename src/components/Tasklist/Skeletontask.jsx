import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const Skeletontask = ({UserLoggedInData}) => {
  //  console.log(UserLoggedInData);
  
  return (
    <div id='skeletontasklist' className='h-[58%] overflow-x-auto gap-5 w-full flex flex-nowrap items-center justify-start py-5 mt-10'>
       {UserLoggedInData.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx}/>
        }
        if(e.newTask){
          return <NewTask key={idx}/>
        }
        if(e.completed){
          return <CompleteTask key={idx}/>
        }
        if(e.failed){
          return <FailedTask key={idx}/>
        }
       })}
    </div>
  )
}

export default Skeletontask