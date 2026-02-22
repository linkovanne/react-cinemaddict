import './FilmList.css'
import FilmCard from "../FilmCard/FilmCard.tsx";

interface FilmListProps {
    title: string;
    type?: string;
}

const FilmList = ({title, type = 'main'}: FilmListProps) => {
    let classes = ['films-list'];
    if (type === 'extra') {
        classes.push('films-list--extra');
    }
    return (
        <section className={classes.join(' ')}>
            <h2 className="films-list__title">{title}</h2>

            <div className="films-list__container">
                <FilmCard/>
                <FilmCard/>
            </div>
        </section>
    );
};

export default FilmList;
