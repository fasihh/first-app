import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404</h2>
            <p>sorry, page not found</p>
            <Link to="/">back to home</Link>
        </div>
    );
}
 
export default NotFound;