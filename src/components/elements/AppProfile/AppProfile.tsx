import './AppProfile.css'
import avatarUrl from '@/assets/images/bitmap@2x.png'
import { Avatar } from 'antd'

const AppProfile = () => {

    return (
        <div className="profile">
            <p className="profile__rating">Movie Buff</p>
            <Avatar className="profile__avatar" size={35} src={avatarUrl} alt="Avatar"/>
        </div>
    );
};

export default AppProfile;
