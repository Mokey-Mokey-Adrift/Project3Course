import "./About.css"

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__left">
                    <h2 className="about__title">О проекте</h2>
                    <p className="about__description">
                        Amadeus — это локальный голосовой ассистент с открытым исходным кодом, 
                        разработанный с упором на приватность и независимость от облачных сервисов. 
                        Проект вдохновлен концепцией искусственного интеллекта из визуальной новеллы 
                        Steins;Gate 0, где технология Amadeus позволяла сохранять сознание и память 
                        человека в цифровом формате.
                        <br/><br/>
                        Наш агент работает полностью на вашем устройстве, не отправляя данные 
                        на внешние серверы. Архитектура системы модульная: вы можете подключать 
                        различные расширения для обработки речи, анализа текста, управления умным 
                        домом и многое другое.
                        <br/><br/>
                        Разработка ведется силами сообщества. Каждая новая функция появляется 
                        только после того, как пользователи проголосуют за её приоритет. 
                        Мы верим, что инструменты будущего должны создаваться теми, кто ими пользуется.
                        <br/><br/>
                        Проект находится в стадии активной разработки. Текущая версия включает 
                        базовое распознавание речи, синтез голоса и простую систему команд. 
                        В планах — интеграция с локальными LLM, поддержка множественных языков 
                        и создание экосистемы плагинов от сторонних разработчиков.
                    </p>
                </div>

                <div className="about__right">
                    <h3 className="about__vote-title">Голосование за функции</h3>
                    <p className="about__vote-subtitle">Выберите, что добавить в следующей версии</p>
                    
                    <ul className="about__vote-list">
                        <li className="about__vote-item">
                            <div className="vote-info">
                                <span className="vote-name">Вариант 1</span>
                                <span className="vote-count">142 голоса</span>
                            </div>
                            <button className="vote-btn">Голосовать</button>
                        </li>
                        <li className="about__vote-item">
                            <div className="vote-info">
                                <span className="vote-name">Вариант 2</span>
                                <span className="vote-count">89 голосов</span>
                            </div>
                            <button className="vote-btn">Голосовать</button>
                        </li>
                        <li className="about__vote-item">
                            <div className="vote-info">
                                <span className="vote-name">Вариант 3</span>
                                <span className="vote-count">203 голоса</span>
                            </div>
                            <button className="vote-btn">Голосовать</button>
                        </li>
                        <li className="about__vote-item">
                            <div className="vote-info">
                                <span className="vote-name">Вариант 4</span>
                                <span className="vote-count">67 голосов</span>
                            </div>
                            <button className="vote-btn">Голосовать</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About