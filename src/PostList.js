import { Link } from "react-router-dom";
import getDate from "./getDate";

const PostList = ({ posts, title }) => {
    return (
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map(post => {
                return (
                    <div className="post-preview" key={post._id}>
                        <Link to={`/posts/${post._id}`}> 
                            <div className="post-content">
                                <h2>{ post.title.length > 15 ? `${post.title.slice(0, 15)}...` : post.title }</h2>
                                <p>by { post.creator.length > 20 ? `${post.creator.slice(0, 20)}...` : post.creator }</p>
                            </div>
                            <p className="timestamp">{ getDate(post.timestamps.createdAt) }</p>   
                        </Link>
                    </div>
                );
            })}
        </div> 
    );
}
 
export default PostList;