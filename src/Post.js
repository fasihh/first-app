import { useHistory } from "react-router-dom";
import setNull from "./setNull";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import getDate from "./getDate";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const history = useHistory();

    const handleDelete = () => {
        if (!window.confirm('are you sure you want delete this post?')) return;

        fetch(`${process.env.REACT_APP_API_URL}/posts/${post._id}`,{
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

    const isUpdated = getDate(post.timestamps.createdAt) !== getDate(post.timestamps.updatedAt);
    return ( 
        <article className="post">
            <div className="post-container">
                <div className="post-header">
                    <div className="creator-details">
                        <h2>{ post.title }</h2>
                        <p>by { post.creator }</p>
                    </div>
                    <div className="time-and-options">
                        <p className="timestamp">{ isUpdated ? "edited -" : "" } { isUpdated ? getDate(post.timestamps.updatedAt) : getDate(post.timestamps.createdAt) }</p>
                        <div className="options">
                            { post.creator === localStorage.getItem('email') && <button className="options-button" onClick={ handleDelete }>delete</button>}
                            { post.creator === localStorage.getItem('email') && <Link to={`/posts/${post._id}/edit`} className="options-button">edit</Link>}
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    { post.content }
                </div>
            </div>
            <div className="comments">
                <h3>comments { post.comments.length }</h3>
                <CreateComment postId={ post._id } />
                <div className="comments-container">
                    { !post.comments.length ? <div className="no-comments-message">no comments yet... be the first one to comment! :D</div> : post.comments.map(comment => {
                        return ( <Comment comment={ comment } key={ comment._id }/> )
                    })}
                </div>
            </div>
        </article>    
    );
}
 
export default Post;