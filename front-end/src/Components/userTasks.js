import React, { useState, useEffect } from "react";
import { getTasks, addTodo, deleteTodo } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import Task from "../modals/TaskModal";
import { useNavigate, Link } from "react-router-dom";
import { loggedIN } from "../redux/loggedin-reducer";
const UserTasks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Below is for Getting Username to pass to api in redux
  const userid_to_send_to_redux = localStorage.userID


  useEffect(() => {
    dispatch(getTasks(userid_to_send_to_redux));
  }, [dispatch, userid_to_send_to_redux]);

  const Tasks = useSelector((state) => state.Tasks.tasks);
  const [newTask, setnewTask] = useState(new Task());
  const signout = () => {
    localStorage.logged_in = false;
    dispatch(loggedIN(false));
    navigate("/");
    localStorage.clear();
  };
  const userData_from_redux = useSelector((state) => state.Auth.userInfo)
  localStorage.setItem('userData_ls', 'userData Storage as Object')
  localStorage.userData_ls = JSON.stringify(userData_from_redux)


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
              setnewTask({ ...newTask, Task: e.target.value });
            }}
          />
          <button
            className="btn-add-todo"
            type="button"
            onClick={() => {
              dispatch(addTodo({userid: userid_to_send_to_redux, Task: newTask }));
            }}
          >
            Add Todo
          </button>

          {Tasks.map((task, index) => (
            <>
              <div className="tasks">
                <h3 key={index}> {task.Task} |
                <button
                className="btn-delete-task"
                  type="button"
                  onClick={() => {
                    dispatch(deleteTodo(userid_to_send_to_redux, { taskToDelete: task.Task }));
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
