import { useHistory } from "react-router-dom";
import getDate from "./getDate";
import setNull from "./setNull";
import defaultLogo from "./logo192.png"

const Comment = ({ comment }) => {
    const history = useHistory();

    const handleDelete = () => {
        if (!window.confirm('are you sure you want to delete this comment?')) return;

        fetch(`http://localhost:3001/posts/${comment.postId}/comments/${comment._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if (res.status === 401) throw new Error('auth failed');
            window.location.reload();
            return res.json();
        })
        .catch(err => {
            if (err.message === 'auth failed') {
                setNull();
                history.push('/');
                return;
            }
        })
    }

    return ( 
        <div className="comment">
            <div className="user">
                <img src={ defaultLogo } alt="" />
                <div className="comment-content">
                    <div className="comment-creator">by { comment.creator }</div>
                    <div className="comment-message">{ comment.content }</div>
                </div>
            </div>
            
            <div className="comment-details">
                <div className="comment-timestamps">{ getDate(comment.timestamps.createdAt) }</div>
                { localStorage.getItem('email') === comment.creator && <button onClick={ handleDelete } className="comment-delete">delete</button> }
            </div>
        </div> 
    );
}
 
export default Comment;