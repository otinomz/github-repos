import People from '../../assets/people.svg'
import Location from '../../assets/location.svg'
import Globe from "../../assets/globe.svg"
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../redux/slices/oAuthslices'

const Profile = () => {
    // getting the data from redux store
    const store = useSelector((state) => state?.repositories)
    

    
    const { loading, profile, error } = store
    
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(Logout())
    }
     
    return (
        <>
            {
                loading ? <h3
                    style={{ margin: "40px 0", color:"green" }}
                    >Loading please wait...</h3>
                        : error ? <h2> {error?.data.message} </h2> : 
                <>
                    <div className="profile__circle">
                        <img src={profile?.avatar_url} alt="profile pics" />
                        <div className="profile__circlez">
                            <img  src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png" alt="profile pics" />
                        </div>
                    </div>
                    
                    <div className="profile__description">
                        <span>{profile?.name} {profile?.login}</span>
                        <button className="work">
                            <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png" alt="profile pics" />
                            Focusing
                        </button>
                        
                        <div className="bio">
                            {profile?.bio}
                        </div>

                        <button>Edit Profile</button>
                        <button onClick={ handleLogout }>
                            Logout
                        </button>
                    </div>
                    
                    <section className="followers__info">
                        <div>
                            <img src={People} alt="people icon" />
                            <span>{profile?.followers} </span> followers
                        </div>

                        <div>
                            <img src="" alt="" />
                            <span>{profile?.following}</span> following
                        </div>
                    </section>

                    <section className="location__info">
                        <div>
                            <img src={Location} alt="location icons" />
                            {profile?.location}
                        </div>
                    </section>

                    <section className="link__info">
                        <div>
                            <img src={Globe} alt="globe icon" />
                            {profile?.twitter_username}
                        </div>
                    </section>

                    <section className="organizations">
                        <h6>Organizations</h6>
                        <div>
                            {/* <img src={profile?.organizations_url} alt="globe icon" />
                            <img src={Globe} alt="globe icon" />
                            <img src={Globe} alt="globe icon" /> */}
                            <img src={profile?.organizations_url} alt="organzations url" />
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Profile