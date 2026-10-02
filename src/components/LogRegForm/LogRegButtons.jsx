const LogRegButtons = ({LogForm,RegForm})=>{
    return(
        <div className="header__auth">
            <button className="header__auth-btn header__login-btn" onClick={LogForm}>Войти</button>
            <button className="header__auth-btn header__register-btn"onClick={RegForm}>Регистрация</button>
        </div>
    )
}


export default LogRegButtons