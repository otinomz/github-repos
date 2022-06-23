import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Dashboard/>} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
