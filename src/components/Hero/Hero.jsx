import "./Hero.css"
import downloadIco from '../../assets/Hero/downloadIco.png'
import githubIco from '../../assets/Hero/githubIco.png'


const Hero = ({})=>{
    return(
        <>
        <section className="hero">
            <div className="hero__container">
                    <div className="hero__wrong__side"> 
                       <div className="hero__title"><h1>Amadeus</h1></div> 
                       <div className="hero__description"><p>Амадеус - голосовой асистент который способен использовать разные модели ии как локальные так и облачные вы сами можете выбрать модель нейросети на свой вкус </p></div>
                        <div className="hero__github">  
                            <div className="hero__subtitle"><h2>Можно скачать с Github или прямо на сайте</h2></div>
                        </div>
                        <div className="hero__download">
                            <ul className="hero_download__ul">
                                <li className="hero_ws_item">
                                    <a href="#" className="hero__download-btn">
                                        <span className="btn-icon"><img src= {githubIco} alt="githubIco" /></span>
                                        <span className="btn-text">Скачать с GitHub</span>
                                    </a>
                                </li>
                                <li className="hero_ws_item">
                                    <a href="#" className="hero__download-btn">
                                        <span className="btn-icon"><img src={downloadIco} alt="downloadIco" /></span>
                                        <span className="btn-text">Скачать с Сайта</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="hero__right__side">
                        <img className="hero__image" src="#" alt="Ui Screenshot" />
                    </div>
            </div>
        </section>  
        </>
    )
}

export default Hero