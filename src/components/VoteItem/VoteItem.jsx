import "./VoteItem.css"


const VoteItem = ({name,count,onVote}) =>{
    return(
    <li className="about__vote-item">
        <div className="vote-info">
            <span className="vote-name">{name}</span>
            <span className="vote-count">{count}</span>
        </div>
        <button className="vote-btn" onClick={onVote}>Голосовать</button>
    </li>
    )
}

export default VoteItem