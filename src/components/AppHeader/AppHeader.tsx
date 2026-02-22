import './AppHeader.css'

const AppHeader = () => {
    return (
        <header className="header">
            <h1 className="header__logo logo">Cinemaddict</h1>

            <section className="header__profile profile">
                <p className="profile__rating">Movie Buff</p>
                <img className="profile__avatar" src="../../assets/bitmap@2x.png" alt="Avatar" width="35" height="35"/>
            </section>
        </header>
    );
};

export default AppHeader;
