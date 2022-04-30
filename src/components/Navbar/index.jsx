import React from 'react'
import { useSelector } from 'react-redux'
import "./index.css"
import { List } from './List'

const Navbar = () => {
    const store = useSelector((state) => state?.repositories)
    
    const { profile }  = store
    


    return (
        <nav className="nav">
            <section>
                <span>{profile?.name} {profile?.login}</span>

                <ul className="right__items">
                    { List.map(({id, name, icon}) => (
                        <li key={id}>
                            <img className="grey" src={icon} alt="" />
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>                

            </section>
        </nav>
    )
}

export default Navbar