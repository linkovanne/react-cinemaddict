import './AppHeader.css'

import AppProfile from "../elements/AppProfile/AppProfile.tsx";
import AppLogo from "../elements/AppLogo/AppLogo.tsx";

const AppHeader = () => {
    return (
        <header className="header">
            <h1 className="header__logo">
                <AppLogo/>
            </h1>

            <AppProfile/>
        </header>
    );
};

export default AppHeader;
