import "./App.css";
import { getTasks, addTodo, deleteTodo } from "./redux/reducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);


  const Tasks = useSelector((state) => state.Tasks.tasks);

  return (
    <>
      <div className="app">
        <button onClick={()=> {dispatch(addTodo())}}>Add Todo</button>
        <button onClick={()=> dispatch(deleteTodo()) }>Delete this task</button>

        
        {
          Tasks.map(task => (
            <>
              <h3>{task.task}</h3>
            </>
          ))
        }
      </div>
    </>
  );
}

export default App;
