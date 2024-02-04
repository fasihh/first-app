const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><a href="/">posts</a></h1>
            <div className="links">
                <a href="/">home</a>
                <a className="signin" href="/create">sign in</a>
            </div>
        </nav>
    );
}

export default Navbar;