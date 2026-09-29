import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <p className="footer__license">
                        Лицензия: <a href="#" className="footer__link">MIT</a>
                    </p>
                </div>
                
                <div className="footer__left">
                    <a href="#" className="footer__link">Помочь проекту</a>
                        <span className="footer__dot">|</span>
                    <a href="#" className="footer__link">Нашли баг?</a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer