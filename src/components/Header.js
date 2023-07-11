import logo from '../assets/LOGO.png'

function Header(){
    return <div class='header'>
        <img class ='header_img' src={logo} alt="logo kasa"/>
        <div class='header_links'>
            <a href="#accueil">Accueil</a>
            <a href="#apropos"> À Propos</a>
        </div>
    </div>
}

export default Header