import "./index.css"
import { RepoCard, SearchBar } from '../components'

const Layout = () => {
    return (
        <div className="layout">
            <section className="left">
                <div className="profile__circle">
                    
                </div>
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