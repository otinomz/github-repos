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
                        <li>
                            <img src={icon} alt="" />
                            <p key={id}>{name}</p>
                        </li>
                    ))}
                </ul>
                

            </section>
        </nav>
    )
}

export default Navbar