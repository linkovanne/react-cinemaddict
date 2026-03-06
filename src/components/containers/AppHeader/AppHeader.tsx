import {Layout} from "antd";

import './AppHeader.css'

import AppProfile from "../../elements/AppProfile/AppProfile.tsx";
import AppLogo from "../../elements/AppLogo/AppLogo.tsx";

const AppHeader = () => {
    return (
        <Layout.Header className="header">
            <h1 className="header__logo">
                <AppLogo/>
            </h1>

            <AppProfile/>
        </Layout.Header>
    );
};

export default AppHeader;
