import logoImg from '../../assets/Header/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logoImg} alt="logo" />
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__item"><a href="#" className="headerNav__item">О нас</a></li>  
                        <li className="header__item"><a href="#" className="headerNav__item">Модули</a></li>
                        <li className="header__item"><a href="#" className="headerNav__item">Голосование</a></li>
                    </ul>
                </nav>
                <div className="header__auth">
                    <button className="header__auth-btn header__login-btn">Войти</button>
                    <button className="header__auth-btn header__register-btn">Регистрация</button>
                </div>
            </div>
        </header>
    )
}

export default Header