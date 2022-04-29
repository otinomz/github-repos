import Down from "../../assets/down.svg"
import Repo from "../../assets/repo.svg"
import './index.css'

const SearchBar = () => {
    return (
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
    )
}

export default SearchBar