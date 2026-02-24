import './Films.css'
import MainNavigation from "../../elements/MainNavigation/MainNavigation.tsx";
import AppSort from "../../elements/AppSort/AppSort.tsx";
import FilmList from "../../containers/FilmList/FilmList.tsx";
import {useCallback, useEffect, useState} from "react";
import FilmService from "../../../api/service/FilmService.ts";
import {useFetch} from "../../../hooks/useFetch.ts";
import type {IFilm} from "../../../api/interfaces/Film.ts";
import EmptyView from "../../containers/EmptyView/EmptyView.tsx";
import {type FilterType, type SortType, useFilms} from "../../../hooks/useFilms.ts";

const Films = () => {
    const [films, setFilms] = useState<IFilm.Item[]>([])

    const [sort, setSort] = useState<SortType>('default');
    const [filter, setFilter] = useState<FilterType>('all');

    const sortedAndFilteredFilms = useFilms(films, sort, filter)

    const fetchFilmsCallback = useCallback(async () => {
        const response = await FilmService.getFilmList();
        setFilms(response?.data || [])
    }, []);

    const {fetch, isLoading, error} = useFetch(fetchFilmsCallback)

    useEffect(() => {
        fetch();
    }, [])

    if (error) {
        return (<div>{error}</div>)
    }

    return (
        <main className="main">
            <MainNavigation filter={filter} setFilter={setFilter} />

            <AppSort sort={sort} setSort={setSort}/>

            {
                isLoading
                    ? <EmptyView/>
                    : <section className="films">
                        <FilmList title={'All movies. Upcoming'} films={sortedAndFilteredFilms} />
                        <FilmList title={'Top rated'} type={'extra'} films={films.slice(2,4)} />
                        <FilmList title={'Most commented'} type={'extra'} films={films.slice(0,2)} />
                    </section>
            }
        </main>
    );
};

export default Films;
