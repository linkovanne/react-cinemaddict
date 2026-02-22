import axios from "axios";

export default class FilmService {
    static async getFilmList() {
        return await axios.get('https://22.objects.htmlacademy.pro/cinemaddict/movies')
    }
}
