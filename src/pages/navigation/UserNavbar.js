import { NavLink } from 'react-router-dom'
import { Cart2 } from 'react-bootstrap-icons';

function UserNavbar({cartContent}) {
    
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <NavLink to="/home" className="navbar-brand">
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
                                <NavLink to="/home" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="account" className="nav-link">
                                    Konto
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto text-center">
                             <li>
                                <NavLink to="/home/cart" className="nav-link ">
                                   <var><Cart2 className='mb-1' size={24} color={"green"}/> <sup><b>{cartContent.length}</b></sup></var> <span className='mx-1'>Koszyk</span> 
                                </NavLink>
                            </li>
                            <li>
                                <a href="/logout" className="nav-link mx-5">
                                    Wyloguj
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default UserNavbar
