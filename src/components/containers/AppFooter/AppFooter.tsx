import {Layout} from "antd";

import './AppFooter.css'

import AppLogo from "../../elements/AppLogo/AppLogo.tsx";

const AppFooter = () => {
    return (
        <Layout.Footer className="footer">
            <section className="footer__logo">
                <AppLogo isSmall={true}/>
            </section>

            <section className="footer__statistics">
                <p>130 291 movies inside</p>
            </section>
        </Layout.Footer>
    );
};

export default AppFooter;
