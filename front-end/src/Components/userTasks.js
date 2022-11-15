import React, { useState, useEffect } from "react";
import { getTasks, addTodo, deleteTodo } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import Task from "../modals/Task";
import { useNavigate, Link } from "react-router-dom";
import { loggedIN } from "../redux/loggedin-reducer";
const UserTasks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Below is for Getting Username to pass to api in redux
  const location = (window.location.href).split('/')  
  const user_to_send_to_redux = location[4]


  useEffect(() => {
    dispatch(getTasks(user_to_send_to_redux));
  }, [dispatch, user_to_send_to_redux]);

  const Tasks = useSelector((state) => state.Tasks.tasks);
  const [newTask, setnewTask] = useState(new Task());
  const signout = () => {
    localStorage.logged_in = false;
    dispatch(loggedIN(false));
    navigate("/");
  };
  return (
    <>
      <div className="userTasks">
        <div className="Signout">
          <Link to="/">
            <button className="btn-home" type="submit">
              Home
            </button>
          </Link>
          <button
            className="btn-signout"
            type="submit"
            onClick={() => {
              signout();
            }}
          >
            Sign Out
          </button>
        </div>
        <div className="TaskBox">
          <input
            className="AddTodo"
            type="text"
            placeholder="Enter a new task to add"
            onChange={(e) => {
              setnewTask({ ...newTask, task: e.target.value });
            }}
          />
          <button
            className="btn-add-todo"
            type="button"
            onClick={() => {
              dispatch(addTodo(user_to_send_to_redux, { Task: newTask }));
            }}
          >
            Add Todo
          </button>

          {Tasks.map((task, index) => (
            <>
              <div className="tasks">
                <h3 key={index}> {task.task} |
                <button
                className="btn-delete-task"
                  type="button"
                  onClick={() => {
                    dispatch(deleteTodo(user_to_send_to_redux, { taskToDelete: task.task }));
                  }}
                >
                  Delete Task
                </button>
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserTasks;
