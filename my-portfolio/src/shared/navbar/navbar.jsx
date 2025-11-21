import { Link } from 'react-router-dom';
import reactSvg from '../../assets/react.svg';
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <div className="container-fluid px-4 px-lg-5">

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto w-100 justify-content-start align-items-center gap-3 gap-lg-5 fw-bold text-uppercase tracking-wider">
                        {["Hero", "Education", "Projects", "Skills", "Contact"].map((section) => (
                            <li className="nav-item text-center" key={section}>
                                <Link
                                    className="nav-link text-white px-3 py-2 rounded-3 transition-all"
                                    to={section.toLocaleLowerCase()}
                                    style={{
                                        textShadow: '1px 1px 8px rgba(0,0,0,0.7)',
                                        letterSpacing: '1.5px',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    {section}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link className="navbar-brand" to="/">
                    <img
                        src={reactSvg}
                        alt="Logo"
                        style={{ height: '40px', filter: 'brightness(0) invert(1)' }} // white logo
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
            </div>
        </nav>
    );
}

export default Navbar