import './FilmRating.css'

interface FilmRatingProps {
    rating: number
}

const FilmRating = ({rating}: FilmRatingProps) => {
    const  getRating = () => {
        const classNames = ['film-rating'];

            if (rating >= 7) {
                classNames.push('good');
            } else if (rating < 5) {
                classNames.push('poor');
            } else {
                classNames.push('average');
            }

            return classNames.join(' ');
    }

    return (
        <p className={getRating()}>{rating}</p>
    );
};

export default FilmRating;
