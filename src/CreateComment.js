import { useState } from "react";
import { useHistory } from "react-router-dom";
import setNull from "./setNull";

const CreateComment = ({ postId }) => {
    const history = useHistory();
    const [content, setContent] = useState("");
    const [failed, setFailed] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ content })
        })
        .then(res => {
            if (!res.ok) {
                switch(res.status) {
                    case 401:
                        throw new Error('auth failed');
                    default:
                        throw new Error();
                }
            }
            window.location.reload();
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
        <div className="create-comment">
            
            <form onSubmit={ handleCreate }>
                <input
                    value={ content }
                    type="text"
                    required
                    spellCheck="false"
                    placeholder="add a comment here..."
                    onChange={(e) => {
                        setFailed(false);
                        setContent(e.target.value);
                    }}
                />
                { failed && <p>content required { ":>" }</p> }
            </form>
            <button onClick={ handleCreate }>comment</button>
        </div> 
    );
}
 
export default CreateComment;