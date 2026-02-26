import './FilmList.css'
import FilmCard from "../FilmCard/FilmCard.tsx";
import type {IFilm} from "../../../api/types/Film.ts";

interface FilmListProps {
    title: string;
    type?: string;
    films: IFilm.Item[];
}

const FilmList = ({title, type = 'main', films}: FilmListProps) => {
    let classes = ['films-list'];
    if (type === 'extra') {
        classes.push('films-list--extra');
    }

    return (
        <section className={classes.join(' ')}>
            <h2 className="films-list__title">{title}</h2>

            <div className="films-list__container">
                {films.map((film) => <FilmCard key={film.id} film={film} />)}
            </div>
        </section>
    );
};

export default FilmList;
