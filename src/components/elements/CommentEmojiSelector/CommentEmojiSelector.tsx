import './CommentEmojiSelector.css'

import cx from 'classnames';

interface ICommentEmojiSelectorProps {
    className: string;
    setEmoji: (icon: string) => void
}

const CommentEmojiSelector = ({className, setEmoji}: ICommentEmojiSelectorProps) => {
    const emogi_map = [
        'src/assets/images/emoji/smile.png',
        'src/assets/images/emoji/sleeping.png',
        'src/assets/images/emoji/puke.png',
        'src/assets/images/emoji/angry.png',
    ]

    return (
        <div className={cx("comment-emoji-selector", className)}>
            {emogi_map.map(emoji => (
                <>
                    {/*<input className="comment-emoji-selector_item visually-hidden" name="comment-emoji-selector"*/}
                    {/*       type="radio" id="emoji-smile" value="smile"/>*/}
                    <div className="comment-emoji-selector_label" onClick={() => setEmoji(emoji)}>
                        <img src={emoji} width="30" height="30" alt="emoji"/>
                    </div>
                </>
            ))}
        </div>
    );
};

export default CommentEmojiSelector;
