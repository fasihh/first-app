import { Link } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem('token');

    return (
        <nav className="navbar">
            <div className="logo">
                <h1><Link to="/">post</Link></h1>
                { token && <div>as { localStorage.getItem('email') }</div> }
            </div>
            <div className="links">
                { token && <a href="/" onClick={ () => { localStorage.setItem('token', '') } } className="signin">log out</a> }
                { !token ? <Link className="signin" to="/signin">sign in</Link> : <Link to="/create" className="create">create post</Link>}
            </div>
        </nav>
    );
}

export default Navbar;