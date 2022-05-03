import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAction, fetchRepositoriesAction } from "./packages/api";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { addName } from "./redux/slices/githubSlices";

const App = () => {
  // dispatch the actions
  const dispatch = useDispatch()

  const store = useSelector((state) => state.oauth)
  const { client_id, client_secret} = store
  
  // for repositories
  const state = useSelector((state) => state.repositories)
  const { user } = state

  let location = useLocation();
  const code = location.search;

  const userName = user
  
  useEffect(() => {

    dispatch(fetchRepositoriesAction(userName))
    dispatch(fetchProfileAction(userName))
    dispatch(addName("Otinomz"))

  }, [dispatch, userName])

  useEffect(() => {
    if (!code) return;
    function postData(params) {
      axios
        .post(`login/oauth/access_token${code}&client_id=${client_id}&client_secret=${client_secret}`,
          {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
            },
          }
        )
        .then(function (response) {
          const token = (response.data)
          const slicedToken = token.slice(13, 53)
          localStorage.setItem('token', JSON.stringify(slicedToken));
        })
        .catch(function (error) {
          console.log(error);
    })
  }
  postData()
  
}, [code, client_id, client_secret])

return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Dashboard/>} />        
    </Routes>
  )
}

export default App;
