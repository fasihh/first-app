import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DotsLoader from "./DotsLoader";
import EditPost from "./EditPost";

const EditHandler = () => {
    const { postId } = useParams();
    const {data, isLoading, failedLoading, error } = useFetch(`${process.env.REACT_APP_API_URL}/posts/${postId}`);

    return (
        <div className="edit-post">
            { isLoading && <DotsLoader /> }
            { failedLoading && <p className="error-message">{ error }</p> }
            { data && <EditPost post={ data }/> }
        </div> 
    );
}
 
export default EditHandler;