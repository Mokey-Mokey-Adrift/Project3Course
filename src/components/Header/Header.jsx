import logoImg from '../../assets/Header/logo.png'
import './Header.css'
import LogRegButtons from '../LogRegForm/LogRegButtons'
import { useState } from 'react'
import LogForm from '../LogForm/LogForm'
import RegForm from '../RegForm/RegForm'

const Header = () => {

    const [IsregVisible,setregVisible] = useState(false)
    const  [IslogVisible,setlogVisible] = useState(false)

    
    const showReg = () =>{
    setregVisible(true)
}
    const showLog = () =>{
    setlogVisible(true)
}
    const closeLog = () =>{
    setlogVisible(false)
}
    const closeReg = () =>{
    setregVisible(false)
}

    return (
    <>
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logoImg} alt="logo" />
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__item"><a href="#" className="headerNav__item">О Проекте</a></li>  
                        <li className="header__item"><a href="#" className="headerNav__item">Скачать</a></li>
                        <li className="header__item"><a href="#" className="headerNav__item">Голосование</a></li>
                    </ul>
                </nav>
                <LogRegButtons
                    LogForm={showLog}
                    RegForm={showReg}
                />
            </div>
        </header>
    
        {IslogVisible === true && <LogForm 
        
        Close={closeLog}
        
        /> }
        {IsregVisible === true && <RegForm 
        
        Close={closeReg}

        /> }    

    
    
    
    
    
    
    
    
    
    
    </>
    )
}

export default Header