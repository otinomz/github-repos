import React from 'react'
import "./index.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <section>
                Navbar

                <ul className="right__items">
                    <li>Overview</li>
                    <li>Repository</li>
                    <li>Projects</li>
                    <li>Packages</li>
                    <li>Stars</li>
                </ul>

            </section>
        </nav>
    )
}

export default Navbar