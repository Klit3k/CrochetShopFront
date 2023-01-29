import { NavLink } from 'react-router-dom'

function GuestNavbar(currentPath) {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <NavLink to="/" className="navbar-brand">
                        CrochetShop
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#toggleMobileMenu"
                        aria-controls="toggleMobileMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="toggleMobileMenu"
                    >
                        <ul className="navbar-nav text-center">
                            <li>
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto text-center">
                            <li>
                                <NavLink to="/login" className="nav-link">
                                    Zaloguj
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="nav-link">
                                    Załóż konto
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default GuestNavbar
