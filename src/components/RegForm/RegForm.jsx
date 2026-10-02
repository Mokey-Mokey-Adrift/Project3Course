import './RegForm.css'

const RegForm = ({Close}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-form">
                <button className="modal-close" onClick={Close}>✕</button>
                
                <h2 className="modal-title" >РЕГИСТРАЦИЯ</h2>
                
                <div className="modal-fields">
                    <div className="field">
                        <label className="field-label">Имя пользователя</label>
                        <input type="text" className="field-input" placeholder="Придумайте логин" />
                    </div>
                    
                    <div className="field">
                        <label className="field-label">Email</label>
                        <input type="email" className="field-input" placeholder="your@email.com" />
                    </div>
                    
                    <div className="field">
                        <label className="field-label">Пароль</label>
                        <input type="password" className="field-input" placeholder="Минимум 8 символов" />
                    </div>
                    
                    <div className="field">
                        <label className="field-label">Повторите пароль</label>
                        <input type="password" className="field-input" placeholder="Ещё раз пароль" />
                    </div>
                    
                    <button className="modal-submit">Зарегистрироваться</button>
                </div>
                
                <p className="modal-footer">
                    Уже есть аккаунт? <span className="modal-link">Войти</span>
                </p>
            </div>
        </div>
    )
}

export default RegForm