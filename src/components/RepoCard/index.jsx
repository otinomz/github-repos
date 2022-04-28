import Star from "../../assets/star.svg"
import Down from "../../assets/down.svg"
import './index.css'

const RepoCard = () => {
    return (
        <>
            <div className="repo__container">
                <section className="repo__top">
                    <div className="left__top">
                        <div className="text">
                            <a href="#"> github-repos </a>
                            <button> private </button>
                        </div>
                        <p className="description">Deliver food to your favorite restaurant</p>
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
                    <div className="left__topz">
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
                        <div className="text">
                            <a href="#"> github-repos </a>
                            <button> private </button>
                        </div>
                        <p className="description">Deliver food to your favorite restaurant</p>
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
                    <div className="left__topz">
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
                        <div className="text">
                            <a href="#"> github-repos </a>
                            <button> private </button>
                        </div>
                        <p className="description">Deliver food to your favorite restaurant</p>
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
                    <div className="left__topz">
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
        </>
    )
}

export default RepoCard