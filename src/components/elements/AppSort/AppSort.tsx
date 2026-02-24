import './AppSort.css'
import type {SortType} from "../../../hooks/useFilms.ts";

interface ISortProps {
    sort: SortType;
    setSort: (sort: SortType) => void;
}

const AppSort = ({sort, setSort}: ISortProps) => {
    const onSort = (e: any, value: SortType) => {
        e.preventDefault();

        setSort(value)
    }
    return (
        <ul className="sort">
            <li>
                <a className={["sort__button", sort === 'default' && "sort__button--active"].join(' ')} onClick={(e) => onSort(e, 'default')}>
                    Sort by default
                </a>
            </li>
            <li>
                <a className={["sort__button", sort === 'release_date' && "sort__button--active"].join(' ')} onClick={(e) => onSort(e, 'release_date')}>
                    Sort by date
                </a>
            </li>
            <li>
                <a className={["sort__button", sort === 'total_rating' && "sort__button--active"].join(' ')} onClick={(e) => onSort(e, 'total_rating')}>
                    Sort by rating
                </a>
            </li>
        </ul>
    );
};

export default AppSort;
