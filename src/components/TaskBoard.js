import React, { useState, useEffect } from "react";
import { Kanban } from "@syncfusion/ej2-react-kanban";

const TaskBoard = ({ socket, taskId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on("task update", (task) => {
      setTasks((prevTasks) => {
        const taskIndex = prevTasks.findIndex((prevTask) => prevTask.id === task.id);
        prevTasks[taskIndex] = task;
        return prevTasks;
      });
    });
  }, [socket]);

  const onTaskDragEnd = (task) => {
    socket.emit("task update", task);
  };

  return (
    <Kanban onTaskDragEnd={onTaskDragEnd} columns={["To Do", "In Progress", "Done"]}>
      {tasks.map((task, index) => (
        <Kanban.Card key={index} columnId={task.status} id={task.id} title={task.title} />
      ))}
    </Kanban>
  );
};

export default TaskBoard;