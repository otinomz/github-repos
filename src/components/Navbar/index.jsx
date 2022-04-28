import React from 'react'
import "./index.css"
import { List } from './List'

const Navbar = () => {
    return (
        <nav className="nav">
            <section>
                Navbar

                <ul className="right__items">
                    { List.map(({id, name}) => (
                        <li key={id}>{ name }</li>
                    ))}
                </ul>

            </section>
        </nav>
    )
}

export default Navbar