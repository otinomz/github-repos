import { Link } from 'react-router-dom'
import './index.css'


const Login = () => {
    return (
        <div className="login__container">
            
            <h3 className="task">Changera Task</h3>

            <section>

                <button>
                    <Link className="link" to="/profile">
                        Sign in With Github
                    </Link>
                </button>
                <footer>Created With Love By Otinomo 💖💖</footer> 

            </section>

            ©️ {(new Date().getFullYear())}
        </div>
    )
}

export default Login