export namespace IFilm {
    export interface Item {
        id: string;
        comments: string;
        film_info: IFilm.Info;
        user_details: IFilm.User
    }

    export interface Info {
        title: string;
        alternative_title: string;
        total_rating: number;
        poster: string;
        age_rating: number;
        director: string;
        writers: string[];
        actors: string[];
        release: {
            date: string;
            release_country: string
        },
        duration: number;
        genre: string[];
        description: string;
    }

    export interface User {
        watchlist: boolean;
        favorite: boolean;
        already_watched: boolean;
        watching_date: string
    }
}
