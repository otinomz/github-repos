import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAction, fetchRepositoriesAction } from "./packages/api";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import axios from "axios";

const App = () => {
  // dispatch the actions
  const dispatch = useDispatch()

  const store = useSelector((state) => state.oauth)
  const { client_id, client_secret } = store
    


  let location = useLocation();
  const code = location.search;

    
  useEffect(() => {
    dispatch(fetchRepositoriesAction("otinomz"))
    dispatch(fetchProfileAction("otinomz"))
  }, [dispatch])

  useEffect(() => {
    if (!code) return;
    function postData(params) {
      const Base_URL = "https://github.com/login"
      axios
        .post( Base_URL +
          `/oauth/access_token${code}&client_id=${client_id}&client_secret=${client_secret}`,
          {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
    })
  }
  postData()
  // console.log('location:', code);
}, [code, client_id, client_secret])

return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Dashboard/>} />        
    </Routes>
  )
}

export default App;
