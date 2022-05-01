import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "./components";
import Layout from "./layout";
import { fetchProfileAction, fetchRepositoriesAction } from "./packages/api";
import Login from "./pages/Login";

const App = () => {
  // dispatch the actions
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(fetchRepositoriesAction("otinomz"))
    dispatch(fetchProfileAction("otinomz"))
  }, [dispatch])

  return (
    <>
      <Login/>
      {/* <Navbar/>
      <div className="container">
        <Layout/>
      </div>
      <footer>Created With Love By Otinomo 💖💖</footer> */}
    </>
  )
}

export default App;
