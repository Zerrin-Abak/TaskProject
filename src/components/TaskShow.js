import { useContext, useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";
function TaskShow({ task }) {

  const {deleteTaskById, editTaskById} = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  }

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate= {handleSubmit}/>
      ) : (
        <>
          <h3 className="task-show-title">Your Duty</h3>
          <p>{task.title}</p>
          <h3 className="task-show-title">Things to do</h3>
          <p>{task.taskDesc}</p>
          <div className="task-show-buttons">
            <button
              className="task-show-delete-button"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
            <button
              className="task-show-update-button"
              onClick={handleEditClick}
            >
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
