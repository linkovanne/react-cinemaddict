import axios from "axios";
import {AUTHORIZATION, END_POINT} from "../consts.ts";
import type {IComment} from "../types/Comment.ts";

export default class CommentService {
    static async getCommentList(filmId: string) {
        return await axios.get<IComment.Item[]>(`${END_POINT}/comments/${filmId}`, {
            headers: {
                Authorization: AUTHORIZATION,
            }
        })
    }
}
