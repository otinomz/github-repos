import React from 'react'
import "./index.css"
import { List } from './List'

const Navbar = () => {
    return (
        <nav className="nav">
            <section>
                Navbar

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