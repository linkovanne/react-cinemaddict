import './NewCommentForm.css'
import {Form, type FormProps, Input} from 'antd';
import CommentEmojiSelector from "../../elements/CommentEmojiSelector/CommentEmojiSelector.tsx";
import {useState} from "react";

interface NewCommentFormProps {
    text: string;
    icon: string;
}

const NewCommentForm = () => {
    const [comment, setComment] = useState<NewCommentFormProps>({
        text: '',
        icon: ''
    })
    const onFormLayoutChange: FormProps<NewCommentFormProps>['onValuesChange']  = ({text}) => {
        console.log(text)
        if (text) {
            setComment({...comment, text});
        }
    };


    return (
        <Form className="film-details__new-comment" onValuesChange={onFormLayoutChange}>
            <div className="film-details__add-emoji-label"></div>

            {/*<label className="film-details__comment-label">*/}
            <Form.Item name="text">
                <Input.TextArea
                    value={comment.text}
                    rows={2}
                    className="film-details__comment-input"
                    placeholder="Select reaction below and write comment here"
                    name="comment"
                />
            </Form.Item>
            {/*</label>*/}

            <CommentEmojiSelector/>
        </Form>
    );
};

export default NewCommentForm;
