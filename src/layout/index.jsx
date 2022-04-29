import "./index.css"
import { Profile, RepoCard, SearchBar } from '../components'
               
                

const Layout = () => {
    return (
        <div className="layout">
            <section className="left">
                <Profile/>
            </section>
            
        
            <section className="right">
                {/* this houses the Repository card 
                and the seaarch bar at the top  */}
                <SearchBar />
                <RepoCard/>
            </section>
        </div>
    )
}

export default Layout