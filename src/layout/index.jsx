import React from 'react'
import "./index.css"
import Repo from "../assets/repo.svg"
import Star from "../assets/star.svg"
import Down from "../assets/down.svg"


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
                
                    <button className="select">
                        Type
                        <img src={ Down } alt="" />
                    </button>
                    <button className="select">
                        Language
                        <img src={ Down } alt="" />
                    </button>
                    <button className="select">
                        Sort
                        <img src={ Down } alt="" />
                    </button>

                    <button className="button">
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
                            <button>
                                <img className="star" src={Star} alt="star icon" />
                                Star
                            </button>

                            <button className="down">
                                <img src={Down} alt=" down icon" />
                            </button>                            
                        </div>
                    </section>
                    
                    <section className="repo__top">
                        <div className="left__top">
                            <div className="language">
                                <div className="color"></div>
                                <p> HTML</p>
                            </div>
                            <p>Updated 1 hours ago</p>
                        </div>

                        <div className="left__bottom">
                            <div className="chart"></div>                            
                        </div>
                    </section>
                </div>

                <div className="repo__container">

                    <section className="repo__top">
                        <div className="left__top">
                            <a href="#">Trofira</a>
                            <button>public</button>
                        </div>

                        <div className="left__bottom">
                            <button>
                                <img className="star" src={Star} alt="star icon" />
                                Star
                            </button>

                            <button className="down">
                                <img src={Down} alt=" down icon" />
                            </button>                            
                        </div>
                    </section>
                    
                    <section className="repo__top">
                        <div className="left__top">
                            <div className="language">
                                <div className="color"></div>
                                <p> Javascript</p>
                            </div>
                            <p>Updated 21 hours ago</p>
                        </div>

                        <div className="left__bottom">
                            <div className="chart"></div>                            
                        </div>
                    </section>
                </div>

                <div className="repo__container">

                    <section className="repo__top">
                        <div className="left__top">
                            <a href="#">Fee-Collector</a>
                            <button>public</button>
                        </div>

                        <div className="left__bottom">
                            <button>
                                <img className="star" src={Star} alt="star icon" />
                                Star
                            </button>

                            <button className="down">
                                <img src={Down} alt=" down icon" />
                            </button>                            
                        </div>
                    </section>
                    
                    <section className="repo__top">
                        <div className="left__top">
                            <div className="language">
                                <div className="color"></div>
                                <p> Solidity</p>
                            </div>
                            <p>Updated 4 days ago</p>
                        </div>

                        <div className="left__bottom">
                            <div className="chart"></div>                            
                        </div>
                    </section>
                </div>

            </section>
        </div>
    )
}

export default Layout