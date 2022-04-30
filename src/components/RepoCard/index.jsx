import Star from "../../assets/star.svg"
import Down from "../../assets/down.svg"
import './index.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
    fetchProfileAction,
    fetchRepositoriesAction
} from "../../packages/api"

const RepoCard = () => {
    // const [user, setUser] =  useState("otinomz")

    // dispatch the actions
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRepositoriesAction("otinomz"))
        dispatch(fetchProfileAction("otinomz"))
    }, [dispatch])

    // getting the data from redux store
    const store = useSelector((state) => state?.repositories)
    console.log(store ) 

    const { loading, repositoriesList, profile, error }  = store
    

    return (
        <>
            
            {
                repositoriesList?.name !== "Error" && repositoriesList?.map((repositories) => (
                    <div className="repo__container" key={repositories?.id}>
                        <section className="repo__top">
                            <div className="left__top">
                                <div className="text">
                                    <a href={repositories?.html_url}> {repositories?.name} </a>
                                    <button> {repositories?.visibility} </button>
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
                                    <p> {repositories?.language}</p>
                                </div>
                                <p>{repositories?.updated_at}</p>
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