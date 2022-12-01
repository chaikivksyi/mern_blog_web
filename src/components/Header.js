import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../auth-context";

export default () => {

    const { logout } = useAuth();

    const [showMenu, toggleMenu] = useState(false)

    return (
        <header className="p-3 mb-3 border-bottom">
            <div
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">Logo</Link>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-dark">Categories...</a></li>
                    {/*<li><a href="#" className="nav-link px-2 link-dark">Item</a></li>*/}
                    {/*<li><a href="#" className="nav-link px-2 link-dark">Item</a></li>*/}
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="dropdown text-end" onClick={() => toggleMenu(!showMenu)}>
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                       id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                             className="rounded-circle" />
                    </a>
                    <ul className={`dropdown-menu text-small ${showMenu ? 'show' : ''}`} aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to='admin'>Create post</Link></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><button className="dropdown-item" onClick={(e) => {
                            e.preventDefault();
                            logout();
                        }}>Sign out</button></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}