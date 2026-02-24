import axios from "axios";
import {AUTHORIZATION, END_POINT} from "../consts.ts";
import type {IFilm} from "../interfaces/Film.ts";
// import type {AppClient, AppClientOptions} from "../client/AppClient.ts";

export default class FilmService {
    // constructor(
    //     private client: AppClient,
    //     private options: AppClientOptions
    // ) {}

    static async getFilmList() {
        return await axios.get<IFilm.Item[]>(`${END_POINT}/movies`, {
            headers: {
                Authorization: AUTHORIZATION,
            }
        })
    }
}
