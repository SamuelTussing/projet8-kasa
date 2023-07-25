import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'

function Header(){
    return <div className='header'>
        <img className='header_img' src={logo} alt="logo"/>
        <nav className='header_links'>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
        </nav>
    </div>
}

export default Header