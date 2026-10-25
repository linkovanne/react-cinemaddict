import { Button } from 'antd';

import type {SortType} from '@/hooks/useFilms.ts';

import './AppSort.css'
import cx from 'classnames';

interface ISortProps {
    sort: SortType;
    setSort: (sort: SortType) => void;
}

interface ISortItem {
    name: string;
    value: SortType;
}

const FILM_LIST_SORT: ISortItem[] = [
    {name: 'Sort by default', value: 'default'},
    {name: 'Sort by date', value: 'release_date'},
    {name: 'Sort by rating', value: 'total_rating'},
]

const AppSort = ({sort, setSort}: ISortProps) => {
    const onSort = (e: any, value: SortType) => {
        e.preventDefault();

        setSort(value)
    }
    return (
        <ul className="sort">
            {FILM_LIST_SORT.map((item) => (
            <li>
                <Button 
                    type={"link"} 
                    className={cx(['sort__button', {
                        ['sort__button--active']: sort === item.value,
                    }])} 
                    onClick={(e) => onSort(e, item.value)}
                >{item.name}</Button>
            </li>
            ))}
        </ul>
    );
};

export default AppSort;
