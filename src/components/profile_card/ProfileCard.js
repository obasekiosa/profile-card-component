import "./ProfileCard.scss"
import profileImage from "../../assets/images/image-victor.jpg";


const Stats = (props) => {
    if (!props) return null;


    const label = props.label || "";
    const value = props.value || 0; 

    return (
        <div className="Stats">
            <span className="value">{value}K</span>
            <span className="label">{label}</span>
        </div>
    )
}

export const ProfileCard = () => {

    return (
        <div className="ProfileCard">
            <div className="personal-info">
                <div className="info__wrapper">
                    <div className="image__wrapper">
                        <img src={profileImage} alt="" />
                    </div>
                </div>
                
                <div className="profile-meta-data">
                    <div className="name-and-age">
                        <span className="name">Victor Crest</span>
                        <span className="age">26</span>
                    </div>
                    <span className="location">London</span>
                </div>
                {/* <hr/>              */}
            </div>
            <div className="profile-stats">
                <Stats label="Followers" value="80"/>
                <Stats label="Likes" value="803" />
                <Stats label="Photos" value="1.4" />
            </div>
        </div>
    )
} 