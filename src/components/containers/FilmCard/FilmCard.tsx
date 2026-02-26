import './FilmCard.css'
import type {IFilm} from "../../../api/types/Film.ts";
import ControlsItem from "../../elements/ControlsItem/ControlsItem.tsx";
// import * as dayjs from "dayjs";
// import duration from 'dayjs/plugin/duration';

export const DESCRIPTION_MAX_SYMBOLS = 39;

interface FilmCardProps {
    film: IFilm.Item
}

const FilmCard = ({film}: FilmCardProps) => {
    const releaseYear = new Date(film.film_info.release.date).getFullYear();
    const duration = new Date(film.film_info.duration).getHours();
    const duration2 = new Date(film.film_info.duration).getMinutes();

    const getDescription = (desc: string) => {
        if (desc.length < DESCRIPTION_MAX_SYMBOLS) {
            return desc;
        } else {
            const arr = desc.split(' ');
            let result = '';
            for (const word of arr) {
                result += ` ${word}`;
                if (result.length > DESCRIPTION_MAX_SYMBOLS) {
                    return `${ result.slice(0, result.length - word.length) }...`;
                }
            }
        }
    };

    // const duration = film.film_info.duration;
    // dayjs.extend(duration);
    // const duration = dayjs.duration(filmDuration, 'minutes').format('H[h] mm[m]')

    return (
        <article className="film-card">
            <a className="film-card__link">
                <h3 className="film-card__title">{film.film_info.title}</h3>
                <p className="film-card__rating">{film.film_info.total_rating}</p>
                <p className="film-card__info">
                    <span className="film-card__year">{releaseYear}</span>
                    {/*<span className="film-card__duration">{ dayjs.duration(film.film_info.duration, 'minutes').format('H[h] mm[m]') }</span>*/}
                    <span className="film-card__duration">{ duration }H {duration2}m</span>
                    <span className="film-card__genre">{film.film_info.genre[0]}</span>
                </p>
                <img src={film.film_info.poster} alt="" className="film-card__poster"/>
                {/*<img src={`../../../assets/${film.film_info.poster}`} alt="" className="film-card__poster"/>*/}
                <p className="film-card__description">{getDescription(film.film_info.description)}</p>
                <span className="film-card__comments">{film.comments.length} comments</span>
            </a>
            <div className="film-card__controls">
                <ControlsItem name={'watchlist'} active={film.user_details.watchlist}>Add to watchlist</ControlsItem>
                <ControlsItem name={'watched'} active={film.user_details.already_watched}>Mark as watched</ControlsItem>
                <ControlsItem name={'favorite'} active={film.user_details.favorite}>Mark as favorite</ControlsItem>
            </div>
        </article>
    );
};

export default FilmCard;
