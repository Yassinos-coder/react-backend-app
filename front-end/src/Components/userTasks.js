import React, {useState, useEffect} from 'react'
import { getTasks, addTodo, deleteTodo } from '../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../modals/Task'
import { useNavigate, Link } from 'react-router-dom'
import { loggedIN } from '../redux/loggedin-reducer'
const UserTasks = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTasks());
    }, [dispatch]);
  
    const Tasks = useSelector((state) => state.Tasks.tasks);
    const [newTask, setnewTask] = useState(new Task());
    const signout = ()=> {
      localStorage.logged_in = false
      dispatch(loggedIN(false))
      navigate('/')
    }
    return (
      <>
        <div className="userTasks">
          <div className="Signout">
            <Link to="/">
              <button className='btn-home' type='submit'>Home</button>
            </Link>
            <button className='btn-signout' type='submit' onClick={()=>{ signout() }}>Sign Out</button>
          </div>
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
