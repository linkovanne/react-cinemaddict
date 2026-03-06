import './FilmList.css'
import {Col, Row} from 'antd';
import FilmCard from "../FilmCard/FilmCard.tsx";
import type {IFilm} from "../../../api/types/Film.ts";

interface FilmListProps {
    title: string;
    type?: 'main' | 'extra';
    films: IFilm.Item[];
}

const FilmList = ({title, type = 'main', films}: FilmListProps) => {
    const classes = ['films-list'];
    if (type === 'extra') {
        classes.push('films-list--extra');
    }

    return (
        <section className={classes.join(' ')}>
            <h2 className="films-list__title">{title}</h2>

            <Row className="films-list__container" gutter={[16, 24]}>
                {films.map((film) => <Col span={type === 'main' ? 6 : 12}>
                    <FilmCard key={film.id} film={film}/>
                </Col>)}
            </Row>
        </section>
    );
};

export default FilmList;
