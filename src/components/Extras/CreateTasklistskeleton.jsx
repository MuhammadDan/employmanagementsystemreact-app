import React, { useState, useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
import { v4 as uuidv4 } from "uuid";
import { getlocalstorageitem, setlocalstorageitem } from "../../utils/localstorage";

const CreateTasklistskeleton = () => {
  const [UserData, setUserData] = useContext(Authcontext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [Taskassign, setTaskassign] = useState("");
  const [category, setcategory] = useState("");
  const [taskDescription, settaskDescription] = useState("");

  const formsubmithandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      ids: uuidv4(),  
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category
    };

    // Ensure the new task is not empty before proceeding
    if (!taskTitle || !taskDate || !Taskassign || !category || !taskDescription) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Ensure UserData is available and is an array
    if (Array.isArray(UserData)) {
      const updatedUserData = UserData.map((elem) => {
        if (Taskassign === elem.Firstname) {
          return {
            ...elem,
            tasks: [...(elem.tasks || []), newTask], // Ensure tasks array exists
            taskNumbers: {
              ...elem.taskNumbers,
              newTask: (elem.taskNumbers?.newTask || 0) + 1
            }
          };
        }
        return elem;
      });

      // Update UserData only if a task was assigned
      if (updatedUserData !== UserData) {
        console.log(updatedUserData);
        
        setUserData(updatedUserData);
        setlocalstorageitem(updatedUserData,getlocalstorageitem().admindata);
        console.log("Updated UserData:", updatedUserData);
      } else {
        alert("Employee not found! Please assign a valid employee.");
      }
    } else {
      console.error("UserData is not an array:", UserData);
    }

    // Reset form fields
    settaskTitle("");
    settaskDate("");
    setTaskassign("");
    setcategory("");
    settaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form onSubmit={formsubmithandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <h3 className="text-sm text-gray-200 mb-0.5">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => settaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="Make a UI design"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => settaskDate(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="date"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Assign to</h3>
          <input
            value={Taskassign}
            onChange={(e) => setTaskassign(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="employee name"
          />
          <h3 className="text-sm text-gray-200 mb-0.5">Category</h3>
          <input
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-200 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className="w-full h-44 text-sm px-2 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
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
