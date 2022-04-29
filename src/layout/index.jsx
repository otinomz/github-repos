import "./index.css"
import { RepoCard, SearchBar } from '../components'

const Layout = () => {
    return (
        <div className="layout">
            <section className="left">
                <div className="profile__circle">
                    <img src="" alt="profile pics" />
                </div>

                <div className="profile__description">
                    <span>otinomz</span>
                    

                    <div>
                        <p>One code at a time cos what i cannot create, I do not understand</p>
                    </div>

                    <button>Edit Profile</button>

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