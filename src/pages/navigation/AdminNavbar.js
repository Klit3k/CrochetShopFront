import { NavLink } from "react-router-dom";
function AdminNavbar() {
    return (
      // <div className="nav">
      //     <NavLink to="/home" className="nav-link">Home</NavLink>
      //     <NavLink to="/admin/product/add" className="nav-link">Dodaj produkt</NavLink>
      //     <NavLink to="/admin/product/edit" className="nav-link">Edytuj produkt</NavLink>
      //     <NavLink to="/logout" className="nav-link">Wyloguj</NavLink>
      // </div>
      <>
                  <div className="container mb-3">
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
                                <NavLink to="/home/account" className="nav-link">
                                    Konto
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="toggleMobileMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Zarządzanie produktami
                            </a>
                            <div className="dropdown-menu" aria-labelledby="toggleMobileMenu">
                            <NavLink to="product/add" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Dodaj produkt</div></NavLink>
                            <NavLink to="product/edit" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Edytuj produkt</div></NavLink>
                            <NavLink to="product/remove" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Usuń produkt</div></NavLink>
                            </div>
                            
                        </li>
                        </ul>
                        <ul className="navbar-nav text-center">
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="toggleMobileMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Zarządzanie kategoriami
                            </a>
                            <div className="dropdown-menu" aria-labelledby="toggleMobileMenu">
                            <NavLink to="/admin/product/create-category" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Dodaj kategorie</div></NavLink>
                            <NavLink to="/admin/product/add-to-category" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Dodaj produkt do kategorii</div></NavLink>
                            <NavLink to="/admin/product/remove-from-category" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Usuń produkt z kategorii</div></NavLink>
                            <NavLink to="/admin/product/show-category" style={{ textDecoration: 'none' }}><div className="dropdown-item" >Pokaż kategorię</div></NavLink>

                            </div>
                            
                        </li>
                        </ul>
                        <ul className="navbar-nav ms-auto text-center">
                            <li>
                                <NavLink to="/logout" className="nav-link">
                                    Wyloguj
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      </>
    );
  }
  export default AdminNavbar;
  