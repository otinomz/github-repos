import React from 'react'
import "./index.css"

const List = [
    {
        id: 1,
        name: "Overview"
    },
    {
        id: 2,
        name: "Repository"
    },
    {
        id: 3,
        name: "Projects"
    },
    {
        id: 4,
        name: "Packages"
    },
    {
        id: 5,
        name: "Stars"
    },
]

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