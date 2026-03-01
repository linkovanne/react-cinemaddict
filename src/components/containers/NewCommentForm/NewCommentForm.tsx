import './NewCommentForm.css'
import CommentEmojiSelector from "../../elements/CommentEmojiSelector/CommentEmojiSelector.tsx";

const NewCommentForm = () => {
    return (
        <form className="film-details__new-comment" action="" method="get">
            <div className="film-details__add-emoji-label"></div>

            <label className="film-details__comment-label">
                                    <textarea className="film-details__comment-input"
                                              placeholder="Select reaction below and write comment here"
                                              name="comment"></textarea>
            </label>

            <CommentEmojiSelector/>
        </form>
    );
};

export default NewCommentForm;
