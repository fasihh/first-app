import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/">posts</Link></h1>
            <div className="links">
                <Link to="/">home</Link>
                { <Link className="signin" to="/signin">sign in</Link> }
            </div>
        </nav>
    );
}

export default Navbar;