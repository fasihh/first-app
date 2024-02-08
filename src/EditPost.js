import { useState } from "react";
import { useHistory } from "react-router-dom";
import setNull from "./setNull";

const EditPost = ({ post }) => {
    const history = useHistory();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [failed, setFailed] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/posts/${post._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ title, content })
        })
        .then(res => { 
            if (!res.ok) {
                switch(res.status) {
                    case 401:
                        throw new Error('auth failed');
                    default:
                        throw new Error();    
                }
            };
            history.push(`/posts/${post._id}`);
        })
        .catch(err => {
            if (err.message === 'auth failed') {
                setNull();
                history.push('/signin');
                return;
            }
            setFailed(true);
        });
    }

    return (
        <div className="create-post">
            <h2>edit post</h2>
            <form>
                <div className="create-input">
                    <label>title { failed && !title.length && <div className="error-message">* field required</div>}</label>
                    <input
                        value={ title }
                        type="text"
                        required
                        spellCheck="false"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="create-input">
                    <label>content</label>
                    <textarea 
                        spellCheck="false"
                        value={ content }
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
            </form>
            <button onClick={ handleEdit }>save post</button>
        </div>
    );
}
 
export default EditPost;