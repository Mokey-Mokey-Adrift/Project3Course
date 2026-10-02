import './LogForm.css'

const LogForm = ({Close}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-form">
                <button className="modal-close" onClick={Close}>✕</button>
                
                <h2 className="modal-title">ВХОД</h2>
                
                <div className="modal-fields">
                    <div className="field">
                        <label className="field-label">Имя пользователя</label>
                        <input type="text" className="field-input" placeholder="Введите логин" />
                    </div>
                    
                    <div className="field">
                        <label className="field-label">Пароль</label>
                        <input type="password" className="field-input" placeholder="Введите пароль" />
                    </div>
                    
                    <button className="modal-submit">Войти</button>
                </div>
                
                <p className="modal-footer">
                    Нет аккаунта? <span className="modal-link">Зарегистрироваться</span>
                </p>
            </div>
        </div>
    )
}

export default LogForm