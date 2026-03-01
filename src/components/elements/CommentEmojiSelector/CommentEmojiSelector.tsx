import './CommentEmojiSelector.css'

const CommentEmojiSelector = () => {
    return (
        <div className="comment-emoji-selector">
            <input className="comment-emoji-selector_item visually-hidden" name="comment-emoji-selector"
                   type="radio" id="emoji-smile" value="smile"/>
            <label className="comment-emoji-selector_label" htmlFor="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji"/>
            </label>

            <input className="comment-emoji-selector_item visually-hidden" name="comment-emoji-selector"
                   type="radio" id="emoji-sleeping" value="sleeping"/>
            <label className="comment-emoji-selector_label" htmlFor="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji"/>
            </label>

            <input className="comment-emoji-selector_item visually-hidden" name="comment-emoji-selector"
                   type="radio" id="emoji-puke" value="puke"/>
            <label className="comment-emoji-selector_label" htmlFor="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji"/>
            </label>

            <input className="comment-emoji-selector_item visually-hidden" name="comment-emoji-selector"
                   type="radio" id="emoji-angry" value="angry"/>
            <label className="comment-emoji-selector_label" htmlFor="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji"/>
            </label>
        </div>
    );
};

export default CommentEmojiSelector;
