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
                       <div className="hero__description"><p>Амадеус - голосовой асистент и так далее потом напишу текст мне сейчас лень и ещё какие то там слова ну наверное этого уже достаточно?</p></div>
                        <div className="hero__github">  
                            <div className="hero__subtitle"><h2>Можно скачать с Github или прямо на сайте</h2></div>
                        </div>
                        <div className="hero__download">
                            <ul className="hero_download__ul">
                                <li className="hero_ws_item">
                                    <a href="#" className="hero__download-btn">
                                        {/* <span className="btn-icon"><img src= {githubIco} alt="githubIco" /></span>
                                        <span className="btn-text">Скачать с GitHub</span> */}
                                    </a>
                                </li>
                                <li className="hero_ws_item">
                                    <a href="#" className="hero__download-btn">
                                        {/* <span className="btn-icon"><img src={downloadIco} alt="downloadIco" /></span>
                                        <span className="btn-text">Скачать с Сайта</span> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="hero__right__side">
                        <img className="hero__image" src="#" alt="System Requirements" />
                    </div>
            </div>
        </section>
        











        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default Hero