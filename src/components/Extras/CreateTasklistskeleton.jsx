import React, { useState } from "react";
import NewTask from "../Tasklist/NewTask";

const CreateTasklistskeleton = () => {
  const [TaskTitle, setTaskTitle] = useState("");
  const [Taskdate, setTaskdate] = useState("");
  const [Taskassign, setTaskassign] = useState("");
  const [Taskcategory, setTaskcategory] = useState("");
  const [Taskdescription, setTaskdescription] = useState("");
  
  const [Admintask, setAdmintask] = useState({})
  const formsubmithandler = (e) => {
    e.preventDefault();
   
    setAdmintask({TaskTitle,Taskdate,Taskcategory,Taskdescription,active:false,newTask:true,failed:false,completed:false})
    console.log(Admintask)    
  };
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={formsubmithandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <h3 className="text-sm text-gray-200 mb-0.5">Task Title</h3>
          <input
            value={TaskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="task"
            placeholder="Make a UI design"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Date</h3>
          <input
            value={Taskdate}
            onChange={(e) => {
              setTaskdate(e.target.value);
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="date"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Assign to</h3>
          <input
            value={Taskassign}
            onChange={(e) => {
              setTaskassign(e.target.value);
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="employee name"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Category</h3>
          <input
            value={Taskcategory}
            onChange={(e) => {
              setTaskcategory(e.target.value);
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="design,dev, etc"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-200 mb-0.5">Description</h3>
          <textarea
            value={Taskdescription}
            onChange={(e) => {
              setTaskdescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTasklistskeleton;
