import './CommentCard.css'

import {Avatar, Button, Card, type CardMetaProps} from "antd";
import type {IComment} from "@/api/types/Comment.ts";
import {formatDate} from "@/utils/dateTimeFormat.ts";

interface CommentCardProps {
    comment: IComment.Item;
}

const CommentCard = ({comment}: CommentCardProps) => {
    const date = formatDate(comment.date, 'YYYY/mm/DD hh:mm');

    const sharedCardMetaProps: CardMetaProps = {
        avatar: <Avatar src={`src/assets/images/emoji/${comment.emotion}.png`} size={55}
                        alt={`emoji-${comment.emotion}`}/>,
        description: <div>
            <p className="comment-card__text">{comment.comment}</p>
            <p className="comment-card__info">
                <span className="comment-card__author">{comment.author}</span>
                <span className="comment-card__day">{date}</span>
                <Button type={'link'}>Delete</Button>
            </p>
        </div>,
    };

    return (
        <Card {...sharedCardMetaProps} className="comment-card">
            <Card.Meta {...sharedCardMetaProps} />
        </Card>
    );
};

export default CommentCard;
