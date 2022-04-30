import "./index.css"
import { Profile, RepoCard, SearchBar } from '../components'
import { useState } from "react";
               
                

const Layout = () => {
    //     set search query to empty string
    const [query, setQuery] = useState("");
    //  set search parameters
    //  we only want to search Repositories
    // const [searchParam] = useState(["capital", "name"]);



    return (
        <div className="layout">
            <section className="left">
                <Profile/>
            </section>
            
        
            <section className="right">
                {/* this houses the Repository card 
                and the seaarch bar at the top  */}
                <SearchBar query={query} setQuery={setQuery} />
                <RepoCard/>
            </section>
        </div>
    )
}

export default Layout