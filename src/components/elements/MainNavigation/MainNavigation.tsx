import './MainNavigation.css'
import type {FilterType} from "../../../hooks/useFilms.ts";

interface IFilterProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const MainNavigation = ({filter, setFilter}: IFilterProps) => {
    const onFilter = (e: any, value: FilterType) => {
        e.preventDefault();

        setFilter(value);
    }

    return (
        <nav className="main-navigation">
            <a href="#all" className={["main-navigation__item", filter === 'all' && "main-navigation__item--active"].join(' ')} onClick={(e) => onFilter(e, 'all')}>
                All movies
            </a>
            <a href="#watchlist" className={["main-navigation__item", filter === 'watchlist' && "main-navigation__item--active"].join(' ')} onClick={(e) => onFilter(e, 'watchlist')}>
                Watchlist
                <span className="main-navigation__item-count">13</span>
            </a>
            <a href="#already_watched" className={["main-navigation__item", filter === 'already_watched' && "main-navigation__item--active"].join(' ')} onClick={(e) => onFilter(e, 'already_watched')}>
                History
                <span className="main-navigation__item-count">4</span>
            </a>
            <a href="#favorite" className={["main-navigation__item", filter === 'favorite' && "main-navigation__item--active"].join(' ')} onClick={(e) => onFilter(e, 'favorite')}>
                Favorites
                <span className="main-navigation__item-count">8</span>
            </a>
        </nav>
    );
};

export default MainNavigation;
