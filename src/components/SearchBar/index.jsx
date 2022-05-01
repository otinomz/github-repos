import Down from "../../assets/down.svg"
import Repo from "../../assets/repo.svg"
import { btnData } from "./btnData"
import './index.css'


const SearchBar = ({query, setQuery}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
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
                {
                    btnData.map(({ id, name }) => (
                        <button className="select" key={id}>
                            {name}
                            <img src={ Down } alt="" />
                        </button>
                    ))
                }

                <button className="button">
                    <img src={Repo} alt="" />
                    New
                </button>
            </section>
        </form>
    )
}

export default SearchBar