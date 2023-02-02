import Login from "./Pages/Login";
import Registration from "./Pages/Registration/Registration";
import { Routes, Route } from "react-router-dom"
import User from "./Pages/User/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path='/user' element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
