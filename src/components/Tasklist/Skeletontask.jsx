import React, { useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import Tasklistnumber from "../Extras/Tasklistnumber";

const Skeletontask = (props) => {
  const [tasks, setTasks] = useState(props.UserLoggedInData.tasks);
  const [taskNumbers, setTaskNumbers] = useState(
    props.UserLoggedInData.taskNumbers
  );
  const [isAccepting, setIsAccepting] = useState(null); // Store ID of task being accepted

  // Debugging logs
  useEffect(() => {
    console.log("Updated Tasks:", tasks);
  }, [tasks]);

  // const handleAcceptTask=(taskId)=>{
  //   const updatetask = tasks.map((task)=>task.id === taskId && task.newTask ? {...task, newTask: false, active:true}: {...task})
  //   setTasks(updatetask)
  //     setTaskNumbers((prev) => ({
  //   ...prev,
  //   newTask: Math.max(0, prev.newTask - 1),
  //   active: prev.active + 1,
  // }));
  // console.log(tasks.id);
  //   setIsAccepting(taskId);
  // }

  const handleAcceptTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.ids === taskId && task.newTask
        ? { ...task, newTask: false, active: true }
        : task
    );

    setTasks(updatedTasks);
    setTaskNumbers((prev) => ({
      ...prev,
      newTask: Math.max(0, prev.newTask - 1),
      active: prev.active + 1,
    }));

    console.log("Accepted Task ID:", taskId);
    setIsAccepting(taskId);
  };

  //  const handleTaskCompletion = (taskId, isCompleted)=>{
  //     const updatedtask1 = tasks.map((task)=>task.id === taskId ? {...task,active: false, completed: isCompleted, failed:!isCompleted }: {...task})
  //     console.log(taskId);

  //     setTasks(updatedtask1)
  //     setTaskNumbers((prev) => ({
  //     ...prev,
  //     active: Math.max(0, prev.active - 1),
  //     completed: isCompleted ? prev.completed + 1 : prev.completed,
  //     failed: !isCompleted ? prev.failed + 1 : prev.failed,
  //   }));
  //     setIsAccepting(null);
  //  }

  const handleTaskCompletion = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.ids === taskId
        ? {
            ...task,
            active: false,
            completed: isCompleted,
            failed: !isCompleted,
          }
        : task
    );

    setTasks(updatedTasks);
    setTaskNumbers((prev) => ({
      ...prev,
      active: Math.max(0, prev.active - 1),
      completed: isCompleted ? prev.completed + 1 : prev.completed,
      failed: !isCompleted ? prev.failed + 1 : prev.failed,
    }));

    console.log("Completed Task ID:", taskId);
    setIsAccepting(null);
  };
  console.log(tasks);

  return (
    <>
      <Tasklistnumber UserLoggedInData={{ taskNumbers }} />
      <div
        id="skeletontasklist"
        className="h-[58%] overflow-x-auto gap-5 w-full flex flex-nowrap items-center justify-start py-5 mt-10"
      >
        {tasks.map((task) => {
          if (task.newTask) {
            return (
              <NewTask
                key={task.ids}
                Taskdata={task}
                onAccept={() => handleAcceptTask(task.ids)}
              />
            );
          }
          if (task.active) {
            return (
              <AcceptTask
                key={task.ids}
                Taskdata={task}
                onComplete={() => handleTaskCompletion(task.ids, true)}
                onFail={() => handleTaskCompletion(task.ids, false)}
              />
            );
          }
          if (task.completed) {
            return <CompleteTask key={task.ids} Taskdata={task} />;
          }
          if (task.failed) {
            return <FailedTask key={task.ids} Taskdata={task} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Skeletontask;
