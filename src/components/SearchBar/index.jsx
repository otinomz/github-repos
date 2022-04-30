import Down from "../../assets/down.svg"
import Repo from "../../assets/repo.svg"
import './index.css'


const SearchBar = ({query, setQuery}) => {
    

    return (
        <form className="form">
            {/* this button is actually set to a display of none for 
                desktop site while it shown for mobile
            */}
            <button className="button">
                <img src={Repo} alt="" />
                New
            </button>

            
            <input
                type="text"
                placeholder='Find a repository...'
                className="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />


            <section>
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
            </section>
        </form>
    )
}

export default SearchBar