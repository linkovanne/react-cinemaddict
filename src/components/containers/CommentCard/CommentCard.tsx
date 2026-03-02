import './CommentCard.css'
import {Button} from "antd";
import type {IComment} from "../../../api/types/Comment.ts";
import {formatDate} from "../../../utils/dateTimeFormat.ts";

interface CommentCardProps {
    comment: IComment.Item;
}

const CommentCard = ({comment}: CommentCardProps) => {
    const date = formatDate(comment.date, 'YYYY/mm/DD hh:mm');

    return (
        <div className="comment-card">
            <span className="comment-card__emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile"/>
            </span>
            <div>
                <p className="comment-card__text">{comment.comment}</p>
                <p className="comment-card__info">
                    <span className="comment-card__author">{comment.author}</span>
                    <span className="comment-card__day">{date}</span>
                    <Button type={'link'}>Delete</Button>
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
