import logoImg from '../../assets/Header/logo.png'
import './Header.css'


const Header = ({}) =>{
    return(
        <>
        <header className='header'>
            <div className='header__container'>
                <img className='header__logo' src={logoImg} alt="logo" />
                <nav className='header__nav'>
                    <ul className='header__ul'>
                        <li className="header__item"><a href="#" className='headerNav__item'>Слово1</a></li>  
                        <li className="header__item"><a href="#" className='headerNav__item'>Слово2</a></li>
                        <li className="header__item"><a href="#" className='headerNav__item'>Слово3</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
        
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default Header;