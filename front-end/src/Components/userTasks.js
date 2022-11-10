import React, {useState, useEffect} from 'react'
import { getTasks, addTodo, deleteTodo } from '../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../modals/Task'
const UserTasks = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getTasks());
    }, [dispatch]);
  
    const Tasks = useSelector((state) => state.Tasks.tasks);
    const [newTask, setnewTask] = useState(new Task());
    return (
      <>
        <div className="userTasks">
          <input
            type="text"
            placeholder="Enter a new task to add"
            onChange={(e) => {
              setnewTask({ ...newTask, task: e.target.value });
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(addTodo({ Task: newTask }));
            }}
          >
            Add Todo
          </button>
  
          {Tasks.map((task) => (
            <>
              <h3>{task.task}</h3>
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteTodo({ taskToDelete: task.task }));
                }}
              >
                Delete Task
              </button>
            </>
          ))}
        </div>
      </>
    );
}

export default UserTasks
