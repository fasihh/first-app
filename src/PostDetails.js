import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DotsLoader from "./DotsLoader";
import Post from "./Post";

const PostDetails = () => {
    const { postId } = useParams();
    const { data, isLoading, failedLoading, error } = useFetch(`${process.env.REACT_APP_API_URL}/posts/${postId}`);

    return ( 
        <div className="post-details">
            { failedLoading && <p className="error-message">{ error }</p> }
            { isLoading && <DotsLoader /> }
            { data && <Post post={ data }/> }
        </div>
    );
}
 
export default PostDetails;