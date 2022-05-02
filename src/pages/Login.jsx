import { Link } from 'react-router-dom'
import './index.css'
import Task from "../assets/task.svg"
import { useSelector } from 'react-redux'

const Login = () => {
    const store = useSelector((state) => state?.oauth)
    
    const { client_id, redirect_uri } = store
    
    return (
        <div className="login__container">
            
            <h3 className="task">Changera Task</h3>

            <section>

                <button>
                    <Link className="link" to="/profile">
                       <img src={Task} alt="github icon" /> Sign in With Github
                    </Link>
                </button>
                <footer>Created With Love By Otinomo 💖💖</footer> 

            </section>

            ©️ {(new Date().getFullYear())}
        </div>
    )
}

export default Login