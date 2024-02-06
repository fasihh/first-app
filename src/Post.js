import { useHistory } from "react-router-dom";
import setNull from "./setNull";

const Post = ({ post }) => {
    const history = useHistory();

    const handleDelete = () => {
        if (!window.confirm('are you sure you want delete this post?')) return;

        fetch(`http://localhost:3001/posts/${post._id}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            method: 'DELETE'
        })
        .then(res => {
            if (res.status === 401) throw new Error('auth failed');
            history.push('/');
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

    const date = new Date(post.timestamps.createdAt);
    return ( 
        <article className="post">
            <div className="post-header">
                <div className="creator-details">
                    <h2>{ post.title.length > 50 ? `${post.title.slice(0, 50)}...` : post.title }</h2>
                    <p>by { post.creator.length > 50 ? `${post.creator.slice(0, 50)}...` : post.creator }</p>
                </div>
                <div className="time-and-options">
                    <p className="timestamp">{ `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` }</p>
                    { post.creator === localStorage.getItem('email') && <button className="signin" onClick={ handleDelete }>delete</button>}
                </div>
            </div>
            <div className="post-content">
                { post.content }
            </div>
        </article>    
    );
}
 
export default Post;