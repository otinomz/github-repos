import Star from "../../assets/star.svg"
import Down from "../../assets/down.svg"
import './index.css'
import { useSelector } from "react-redux"


const RepoCard = () => {
    
    
    const store = useSelector((state) => state?.repositories)
    const {repositoriesList }  = store
    

    return (
        <>
            
            {
                repositoriesList?.name !== "Error" && repositoriesList?.map((repositories) => (
                    
                    <div className="repo__container" key={repositories?.id}>
                        <section className="repo__top">
                            <div className="left__top">
                                <div className="text">
                                    <a href={repositories?.html_url} target="_"> {repositories?.name} </a>
                                    <button> {repositories?.visibility} </button>
                                </div>
                                <p className="description">{repositories?.description}</p>
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
                                    <p> {repositories?.language}</p>
                                </div>
                                <p>Updated {repositories?.updated_at}</p>
                            </div>

                            <div className="left__bottom">
                                <div className="chart"></div>                            
                            </div>
                        </section>
                    </div>
                ))
            }
            
        </>
    )
}

export default RepoCard