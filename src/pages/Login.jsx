// import { Link } from 'react-router-dom'
import './index.css'
import Task from "../assets/task.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const store = useSelector((state) => state.oauth)
    const [data, setData] = useState({ errorMessage: "", isLoading: false });    
    const { client_id, redirect_uri } = store
    const dispatch = useDispatch()

    console.log(client_id)

    useEffect(() => {
        // After requesting Github access,
        // Github redirects back to our app with a code parameter
        const url = window.location.href
        const hasCode = url.includes("?code=")

        // If Github API returns the code parameter
        if (hasCode) {
            const newUrl = url.split("?code=")
            window.history.pushState({}, null, newUrl[0])
            setData({
                ...data,
                isLoading: true
            })
            const requestData = {
                code: newUrl[1]
            }
            const proxy_url = store.proxy_url

            // Use code parameter and other parameters to make POST request to proxy_server
            fetch(proxy_url, {
                method: "POST",
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    // dispatch({
                    //     type: "LOGIN",
                    //     payload: { user: data, isLoggedIn: true }
                    // })
                    
                    dispatch( Login({
                        user: data,
                        isLoggedIn: true
                    }))
                    
                        
                })
                .catch(error => {
                    alert(error.message)
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    })
                })
            }
    }, [store, dispatch, data])

    if (store.isLoggedIn) {
        return <Navigate to="/profile" />
    }

    
    const handleLogin = () => {
        console.log("you clicked me")
        setData({
            ...data,
            errorMessage: ""
        })
    }

    return (
        <div className="login__container">
            
            <h3 className="task">Changera Task</h3>

            <section>

                {
                    data.isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                        
                    ) : (<>
                            
                            {
                            // Link to request GitHub access
                            }
                            <button>
                                <a
                                    className="login-link"
                                    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                                    onClick={handleLogin}
                                >
                                    {/* <Link className="link" to="/profile"> */}
                                    <img src={Task} alt="github icon" /> Sign in With Github
                                    {/* </Link> */}
                                </a>    
                            </button>
                            <footer>Created With Love By Otinomo 💖💖</footer> 

                        </>
                    )
                }
                        
            </section>

            ©️ {(new Date().getFullYear())}
        </div>
    )
}

export default Login