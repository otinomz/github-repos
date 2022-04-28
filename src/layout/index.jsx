import React from 'react'
import "./index.css"
import Repo from "../assets/repo.svg"

const Layout = () => {
    return (
        <div className="layout">
            <section className="left">
                Left go here
            </section>
            
            
            <section className="right">
                <div className="top">
                    <input
                        type="text"
                        placeholder='Find a repository...'
                        className="search"
                    />
                
                    <select
                        required
                        name="category"
                        id="category"
                    >
                        <option  value="African">Type</option> 
                    </select>
                    
                    <select
                        required
                        name="category"
                        id="category"
                    >
                        <option  value="Language">Type</option> 
                    </select>

                    <select
                        required
                        name="category"
                        id="category"
                    >
                        <option  value="Sort">Type</option> 
                    </select>

                    <button>
                        <img src={Repo} alt="" />
                        New
                    </button>
                </div>
                
                

            </section>
        </div>
    )
}

export default Layout