import { NavLink } from "react-router-dom";

import Logo from '../assets/logo/Header_logo.png'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt='Logo Kasa' />
            <nav>
                <ul className="header__links">
                    <li>
                        <NavLink to={'/'} className="nav-link">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} className="nav-link">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;