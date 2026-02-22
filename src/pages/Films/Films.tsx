import './Films.css'
import MainNavigation from "../../components/MainNavigation/MainNavigation.tsx";
import AppSort from "../../components/AppSort/AppSort.tsx";
import FilmList from "../../components/FilmList/FilmList.tsx";

const Films = () => {
    return (
        <main className="main">
            <MainNavigation/>

            <AppSort/>

            <section className="films">
                <FilmList title={'All movies. Upcoming'} />
                <FilmList title={'Top rated'} type={'extra'} />
                <FilmList title={'Most commented'} type={'extra'} />
            </section>
        </main>
    );
};

export default Films;
