const Comment = ({ comment }) => {
    return ( 
        <div className="comment">
            { comment.content }
        </div> 
    );
}
 
export default Comment;