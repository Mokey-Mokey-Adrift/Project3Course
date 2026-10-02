import "./About.css"
import {get_all_vote_functions} from "../../api/votes"
import VoteItem from "../VoteItem/VoteItem"

import { useState,useEffect } from "react"
    
const About = () => {

    const [votes, setVotes] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(() =>{
        const fetchVotes = async () =>{
            try{
                const data = await get_all_vote_functions()
                setVotes(data)
            }catch(error){
                console.log("Ошибка зарузки ",error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchVotes()
    },[])

    const handleVote = (id)=>{
        setVotes(votes.map(vote =>{
            if(vote.id === id ){
                return {...vote,count:vote.count + 1}
            }
            return vote
        }))
    }



    return (
        <section className="about">
            <div className="about__container">
                <div className="about__left">
                    <h2 className="about__title">О проекте</h2>
                    <p className="about__description">
                        Amadeus — это голосовой ассистент с открытым исходным кодом, 
                        разработанный в первую очередь для управления вашей ОС голосовыми командами. 
                        <br/><br/>
                        В лаунчере вы можете скачать локальную модель в зависимости от мощности вашего устройства 
                        <br/><br/>
                        Или же вы можете подключить облачную модель по API ключу получить его не сложно а всё остальнео мы подключим сами
                        <br/><br/>
                        Все кто хотят поучаствовать в проекте могут добавить свои функции сами и скорее всего они появятся в новых версиях 
                        но даже если вы не желаете заниматься разработкой вы можете зарегестрироваться и принять участие в голосовании за функции в новой версии 
                        <br/><br/>
                        Текущая версия: 0.3 Рабочий чат с очисткой истории голосовым вводом вызовом по команде а так же три варианта озвучки текста 
                    </p>
                </div>

                <div className="about__right">
                    
                    <h3 className="about__vote-title">Голосование за функции</h3>
                    <p className="about__vote-subtitle">Выберите, что добавить в следующей версии</p>

                        {loading ? (<p className="about__loading">Загрузка...</p>) :
                        (
                            <ul className="about__vote-list">
                                {votes.map(vote =>(
                                    <VoteItem
                                    key = {vote.id}
                                    name={vote.name}
                                    count={vote.count}
                                    onVote={()=>handleVote(vote.id)}
                                    />
                                ))}
                            </ul>
                        )
                        }

                    
                </div>
            </div>
        </section>
    )
}

export default About