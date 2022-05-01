import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileAction, fetchRepositoriesAction } from "./packages/api";
import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // dispatch the actions
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(fetchRepositoriesAction("otinomz"))
    dispatch(fetchProfileAction("otinomz"))
  }, [dispatch])

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
