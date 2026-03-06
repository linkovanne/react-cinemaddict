import './FilmFilters.css'

import {Badge} from "antd";

import type {FilterType} from "../../../hooks/useFilms.ts";

export interface IFilmFilter {
    label: string;
    value: string;
    count: number;
}

interface IFilterProps {
    filters: IFilmFilter[];
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const FilmFilters = ({filters, filter, setFilter}: IFilterProps) => {
    const onFilter = (e: any, value: FilterType) => {
        e.preventDefault();

        setFilter(value);
    }

    return (
        <nav className="main-navigation">
            <a href="#all"
               className={["main-navigation__item", filter === 'all' && "main-navigation__item--active"].join(' ')}
               onClick={(e) => onFilter(e, 'all')}
            >
                All movies
            </a>

            {filters.map(item => (
                <a key={item.value} href={`#${item.value}`}
                   className={["main-navigation__item", filter === 'watchlist' && "main-navigation__item--active"].join(' ')}
                   onClick={(e) => onFilter(e, item.value as FilterType)}>
                    {item.label} <Badge className={'main-navigation__item-count'}
                                        color={'geekblue'}
                                        count={item.count} />
                </a>
            ))}
        </nav>
    );
};

export default FilmFilters;
