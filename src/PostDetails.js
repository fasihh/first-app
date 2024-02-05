import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DotsLoader from "./DotsLoader";
import Post from "./Post";

const PostDetails = () => {
    const { postId } = useParams();
    const { data, isLoading, failedLoading, error } = useFetch(`http://localhost:3001/posts/${postId}`);

    return ( 
        <div className="post-details">
            { failedLoading && <p className="error-message">{ error }</p> }
            { isLoading && <DotsLoader /> }
            { !isLoading && !data && <p className="error-message">can't find post :c</p>}
            { data && <Post post={ data }/> }
        </div>
    );
}
 
export default PostDetails;