import logo from '../assets/LOGO.png'

function Header(){
    return <div className='header'>
        <img className ='header_img' src={logo} alt="logo kasa"/>
        <div className='header_links'>
            <a href="#accueil">Accueil</a>
            <a href="#apropos"> À Propos</a>
        </div>
    </div>
}

export default Header