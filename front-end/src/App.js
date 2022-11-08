import "./App.css";
import { getTasks } from "./redux/reducer";
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
        {
          Tasks.map((task ,index) => (
            <>
              <h3 key={index}>{task.task}</h3>
            </>
          ))
        }
      </div>
    </>
  );
}

export default App;
