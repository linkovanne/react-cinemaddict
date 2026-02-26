import './Films.css'
import MainNavigation from "../../elements/MainNavigation/MainNavigation.tsx";
import AppSort from "../../elements/AppSort/AppSort.tsx";
import FilmList from "../../containers/FilmList/FilmList.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import FilmService from "../../../api/service/FilmService.ts";
import {useFetch} from "../../../hooks/useFetch.ts";
import type {IFilm} from "../../../api/types/Film.ts";
import EmptyView from "../../containers/EmptyView/EmptyView.tsx";
import {type FilterType, type SortType, useFilms} from "../../../hooks/useFilms.ts";

const Films = () => {
    const [films, setFilms] = useState<IFilm.Item[]>([]);

    const [sort, setSort] = useState<SortType>('default');
    const [filter, setFilter] = useState<FilterType>('all');

    const sortedAndFilteredFilms = useFilms(films, sort, filter);
    const topRatedFilms = useMemo(() => {
        const rated = films.sort((a, b) => b.film_info.total_rating - a.film_info.total_rating)

        return rated.slice(0, 2)
    }, [films]);
    const mostCommentedFilms = useMemo(() => {
        const commented = films.sort((a, b) => b.comments.length - a.comments.length)

        return commented.slice(0, 2)
    }, [films]);

    const fetchFilmsCallback = useCallback(async () => {
        const response = await FilmService.getFilmList();
        setFilms(response?.data || [])
    }, []);

    const {fetch, isLoading, error} = useFetch(fetchFilmsCallback)

    useEffect(() => {
        fetch();
    }, [fetch])

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
                        <FilmList title={'Top rated'} type={'extra'} films={topRatedFilms} />
                        <FilmList title={'Most commented'} type={'extra'} films={mostCommentedFilms} />
                    </section>
            }
        </main>
    );
};

export default Films;
