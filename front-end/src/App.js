import "./App.css";
import UserTasks from "./Components/userTasks";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { useSelector } from "react-redux";
import Signup from "./Components/Signup/Signup";


function App() {
  const redux_state = useSelector((state) => state.Auth.islogged)
  if (!localStorage.logged_in) {
    localStorage.setItem('logged_in', redux_state)
  }
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login />} />
            <Route  element={<ProtectedRoutes/>}>
              <Route path="/UserTasks/:username" element={<UserTasks />}/>
            </Route>
            <Route path="/Signup" element={<Signup/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
