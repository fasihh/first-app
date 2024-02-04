const PostList = ({ posts, title }) => {
    return (
        <div className="post-list">
            <h2>{ posts.length > 0 ? title : "no posts here" }</h2>
            {posts.map(post => {
                const date = new Date(post.timestamps.createdAt);
                return (
                    <div className="post-preview" key={post.id}>
                        <div className="post-content">
                            <h2>{ post.title }</h2>
                            <p>by { post.creator }</p>
                        </div>
                        <p className="timestamp">{ `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` }</p>
                    </div>
                );
            })}
        </div> 
    );
}
 
export default PostList;