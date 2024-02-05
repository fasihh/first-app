import { Link } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem('token');

    return (
        <nav className="navbar">
            <h1><Link to="/">posts</Link></h1>
            <div className="links">
                { token && <a href="/" onClick={ () => { localStorage.setItem('token', '') } } className="signin">log out</a> }
                { !token ? <Link className="signin" to="/signin">sign in</Link> : <Link to="/create" className="create">create post</Link>}
            </div>
        </nav>
    );
}

export default Navbar;