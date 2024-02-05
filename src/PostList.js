import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
    return (
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map(post => {
                const date = new Date(post.timestamps.createdAt);
                return (
                    <div className="post-preview" key={post._id}>
                        <Link to={`/posts/${post._id}`}> 
                            <div className="post-content">
                                <h2>{ post.title }</h2>
                                <p>by { post.creator }</p>
                            </div>
                            <p className="timestamp">{ `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` }</p>   
                        </Link>
                    </div>
                );
            })}
        </div> 
    );
}
 
export default PostList;