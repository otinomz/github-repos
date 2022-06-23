import './index.css'
import { useState } from 'react'
import Task from "../assets/task.svg"
import { addProfile, addRepositories } from '../redux/slices/githubSlices'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            const profileResult = await axios(`https://api.github.com/users/${name}`)
            const repositoriesResult = await axios(`https://api.github.com/users/${name}/repos?per_page=20&sort=asc`)
            
            dispatch(addProfile(profileResult.data))
            dispatch(addRepositories(repositoriesResult.data))

            if (profileResult.data && repositoriesResult.data) {
                navigate('/profile')
            }

        } catch (error) {
            setError(error.response.data.message)
            setVisible(true)
            const timer = setTimeout(() => {
                setVisible(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
    
    }


    return (
        <div className="login__container">     
            <h3 className="task">Find Github Repository.</h3>
            
            <p className="error"> {visible && error} </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />

                <button>
                    <img src={Task} alt="github icon" /> Find Repository
                </button>
            
                <footer>Created With Love By Otinomo 💖💖</footer> 

            </form>

            ©️ {(new Date().getFullYear())}
        </div>
    )
}

export default Login