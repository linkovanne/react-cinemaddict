import {useMemo} from "react";
import type {IFilm} from "../api/types/Film.ts";
import type {KeyOf} from "../api/types/common.ts";

export type FilterType = 'all' | KeyOf<IFilm.User>;
export type SortType = 'default' | 'total_rating' | 'release_date';

export const useSortedPosts = (films: IFilm.Item[], sort: SortType) => {
    return useMemo(() => {
        if (sort === 'total_rating') {
            return [...films].sort((a, b) => b.film_info[sort] - a.film_info[sort]);
        }

        return films;
    }, [sort, films]);
}

export const useFilms = (films: IFilm.Item[], sort: SortType, filter: FilterType): IFilm.Item[] => {
    const sortedFilms = useSortedPosts(films, sort);
    return useMemo(() => {
        if (filter) {
            return filter === 'all' ? sortedFilms : sortedFilms.filter((film: IFilm.Item) => !!film.user_details[filter]);
        }
        return sortedFilms;
    }, [filter, sortedFilms]);
}
