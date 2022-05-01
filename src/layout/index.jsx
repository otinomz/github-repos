import "./index.css"
import { MobileNav, Profile, RepoCard, SearchBar } from '../components'
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
                <MobileNav/>
                {/* this houses the Repository card
                and the seaarch bar at the top  */}
                <SearchBar query={query} setQuery={setQuery} />
                <RepoCard query={query} />
            </section>
        </div>
    )
}

export default Layout