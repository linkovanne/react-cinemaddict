const CommentCard = () => {
    return (
        <div className="comment-card">
            <span className="comment-card__emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile"/>
            </span>
            <div>
                <p className="comment-card__text">Interesting setting and a good cast</p>
                <p className="comment-card__info">
                    <span className="comment-card__author">Tim Macoveev</span>
                    <span className="comment-card__day">2019/12/31 23:59</span>
                    <button className="comment-card__delete">Delete</button>
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
