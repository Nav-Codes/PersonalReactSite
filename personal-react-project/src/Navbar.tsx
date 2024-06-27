function Navbar() {
    return (
        <nav className="navbar bg-white navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/apps.html">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://github.com/Nav-Codes" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/navjot-kehal-a88b23212/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;