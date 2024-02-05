const Post = ({ post }) => {
    const date = new Date(post.timestamps.createdAt);
    return ( 
        <article className="post">
            <div className="post-header">
                <div className="creator-details">
                    <h2>{ post.title }</h2>
                    <p>by { post.creator }</p>
                </div>
                <div className="time-details">
                <p className="timestamp">{ `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` }</p>
                </div>
            </div>
            <div className="post-content">
                { post.content }
            </div>
        </article>    
    );
}
 
export default Post;