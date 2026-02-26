import './AppProfile.css'

const AppProfile = () => {
    return (
        <div className="profile">
            <p className="profile__rating">Movie Buff</p>
            <img className="profile__avatar" src="../../../assets/images/bitmap@2x.png" alt="Avatar" width="35" height="35"/>
        </div>
    );
};

export default AppProfile;
