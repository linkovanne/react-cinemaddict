import './FilmDetails.css'
import {Drawer} from "antd";
import type {IFilm} from "../../../api/types/Film.ts";
import {formatDuration, formatDate} from "../../../utils/dateTimeFormat.ts";
import CommentCard from "../CommentCard/CommentCard.tsx";
import NewCommentForm from "../NewCommentForm/NewCommentForm.tsx";
import FilmRating from "../../elements/FilmRating/FilmRating.tsx";

interface FilmDetailsProps {
    film: IFilm.Item
    open: boolean;
    setOpen: (open: boolean) => void;
}

const FilmDetails = ({film, open, setOpen}: FilmDetailsProps) => {
    const releaseDate = formatDate(film.film_info.release.date, 'DD MMMM YYYY');
    const duration = formatDuration(film.film_info.duration);

    return (
        <Drawer open={open} closable onClose={() => setOpen(false)} size={'100%'} className="film-details">
            <div className="film-details__top-container">
                <div className="film-details__info-wrap">
                    <div className="film-details__poster">
                        <img className="film-details__poster-img"
                             src={`../../../assets/${film.film_info.poster}`}
                             alt=""/>

                        <p className="film-details__age">{film.film_info.age_rating}+</p>
                    </div>

                    <div className="film-details__info">
                        <div className="film-details__info-head">
                            <div className="film-details__title-wrap">
                                <h3 className="film-details__title">{film.film_info.title}</h3>
                                <p className="film-details__title-original">Original: {film.film_info.alternative_title}</p>
                            </div>

                            <div className="film-details__rating">
                                <div className="film-details__total-rating">
                                    <FilmRating rating={film.film_info.total_rating}/>
                                </div>
                            </div>
                        </div>

                        <table className="film-details__table">
                            <tbody>
                            <tr className="film-details__row">
                                <td className="film-details__term">Director</td>
                                <td className="film-details__cell">{film.film_info.director}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Writers</td>
                                <td className="film-details__cell">{film.film_info.writers.join(', ')}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Actors</td>
                                <td className="film-details__cell">{film.film_info.actors.join(', ')}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Release Date</td>
                                <td className="film-details__cell">{releaseDate}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Duration</td>
                                <td className="film-details__cell">{duration}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Country</td>
                                <td className="film-details__cell">{film.film_info.release.release_country}</td>
                            </tr>
                            <tr className="film-details__row">
                                <td className="film-details__term">Genres</td>
                                <td className="film-details__cell">
                                    {film.film_info.genre.map(g => <span key={g}
                                                                         className="film-details__genre">{g}</span>)}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <p className="film-details__film-description">{film.film_info.description}</p>
                    </div>
                </div>

                <section className="film-details__controls">
                    <button type="button"
                            className="film-details__control-button film-details__control-button--watchlist"
                            id="watchlist" name="watchlist">Add to watchlist
                    </button>
                    <button type="button"
                            className="film-details__control-button film-details__control-button--active film-details__control-button--watched"
                            id="watched" name="watched">Already watched
                    </button>
                    <button type="button"
                            className="film-details__control-button film-details__control-button--favorite"
                            id="favorite" name="favorite">Add to favorites
                    </button>
                </section>
            </div>

            <div className="film-details__bottom-container">
                <section className="film-details__comments-wrap">
                    <h3 className="film-details__comments-title">Comments <span
                        className="film-details__comments-count">{film.comments.length}</span></h3>

                    <div className="film-details__comments-list">
                        {film.comments.map(c => <CommentCard key={c}/>)}
                    </div>

                    <NewCommentForm/>
                </section>
            </div>
        </Drawer>
    );
};

export default FilmDetails;
