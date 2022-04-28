import React from 'react'
import "./index.css"
import Repo from "../assets/repo.svg"
import Star from "../assets/star.svg"


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
                        <option  value="Language">Language</option> 
                    </select>

                    <select
                        required
                        name="category"
                        id="category"
                    >
                        <option  value="Sort">Sort</option> 
                    </select>

                    <button>
                        <img src={Repo} alt="" />
                        New
                    </button>
                </div>
                
                <div className="repo__container">

                    <section className="repo__top">
                        
                        <div className="left__top">
                            <a href="#">github-repos</a>
                            <button>private</button>
                        </div>

                        <div className="left__bottom">
                            <div>
                                <button>
                                    <img src={Star} alt="star icon" />
                                    Star
                                </button>
                            </div>
                            
                        </div>

                    </section>
                    
                    {/* <section className="repo__bottom">

                        <div className="left__bottom">
                            <div className="language"></div>
                            <p>Updated 1 hour ago</p>
                        </div>
                    </section> */}


                </div>

            </section>
        </div>
    )
}

export default Layout