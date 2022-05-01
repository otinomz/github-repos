import React from 'react'
import { useSelector } from 'react-redux'
import "./index.css"
import { List } from './List'
import Book from "../../assets/book.svg"
import Repo from "../../assets/repo.svg"

const MobileNav = () => {
    const store = useSelector((state) => state?.repositories)
    
    const { profile }  = store
     

    return (
        <nav className="mobile__nav">
            <section>
                <ul className="right__items">

                    <li >
                        <img className="grey" src={Book} alt="" />
                        <p>Overview</p>
                    </li>

                    <li >
                        <img className="grey" src={Repo} alt="" />
                        <p>Repository</p>
                        <button className='repo__number'>
                            {profile?.public_repos}       
                        </button>
                    </li>

                    {/* mapping this other one to reduce redundacy */}
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

export default MobileNav