import Logo from '../assets/logo/Footer_logo.png';

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={Logo} alt='Logo Kasa' />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;