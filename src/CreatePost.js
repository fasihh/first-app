import { useState } from "react";
import { useHistory } from "react-router-dom";
import setNull from "./setNull";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [failed, setFailed] = useState(false);
    const history = useHistory();

    const handleCreate = (e) => {
        e.preventDefault();
        const post = { title, content };
        console.log(localStorage.getItem('token'));

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(post)
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
            history.push('/');
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
            <h2>create post</h2>
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
            <button onClick={ handleCreate }>create post</button>
        </div>
    );
}
 
export default CreatePost;