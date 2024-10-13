import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({task, taskFormUpdate, onUpdate}) {

  const {createTask, editTaskById} = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [taskDescription, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(task.id, title, taskDescription);
    }else{
        createTask(title, taskDescription);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <>
      {taskFormUpdate ? (
        <>
          <div className="task-update">
            <h3>Please edit the task!</h3>
            <form className="task-form">
              <label className="task-label">Please edit the title</label>
              <input
                className="task-input"
                value={title}
                onChange={handleTitleChange}
              />
              <label className="task-label">Please edit your task</label>
              <textarea
                className="task-input"
                rows={5}
                value={taskDescription}
                onChange={handleTaskChange}
              />
              <button className="task-button task-button-update" onClick={handleSubmit}>
                Update
              </button>
            </form>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="task-create">
            <h3>Please add a task!</h3>
            <form className="task-form">
              <label className="task-label">Title</label>
              <input
                className="task-input"
                value={title}
                onChange={handleTitleChange}
              />
              <label className="task-label">Enter your task</label>
              <textarea
                className="task-input"
                rows={5}
                value={taskDescription}
                onChange={handleTaskChange}
              />
              <button className="task-button" onClick={handleSubmit}>
                Create
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default TaskCreate;
