import People from '../../assets/people.svg'
import Location from '../../assets/location.svg'
// import Twitter from '../assets/twitter.svg'
import Globe from "../../assets/globe.svg"
import './index.css'

const Profile = () => {
    return (
        <>
            <div className="profile__circle">
                <img src="" alt="profile pics" />
            </div>

            <div className="profile__description">
                <span>otinomz</span>
            
                <div>
                    One code at a time cos what i cannot create, I do not understand
                </div>

                <button>Edit Profile</button>
            </div>
            
            <section className="followers__info">
                <div>
                    <img src={People} alt="people icon" />
                    <span>12 </span> followers
                </div>

                <div>
                    <img src="" alt="" />
                    <span>14 </span> following
                </div>
            </section>

            <section className="location__info">
                <div>
                    <img src={Location} alt="location icons" />
                    Jos North, Nigeria
                </div>
            </section>

            <section className="link__info">
                <div>
                    <img src={Globe} alt="globe icon" />
                    @otinomz
                </div>
            </section>
        </>
    )
}

export default Profile