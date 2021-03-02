import React from 'react';
import './PlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';


const PlayerCard = (props) => {
    const {name,age, battingStyle,email,image,Born}=props.player

    return (
        <div className="single-player">
            <div className="player-image">
                <img src={image} alt=""/>
            </div>
            <div className="player-info">
            <h3> Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Born: {Born}</p>
            <p>Batting Style: {battingStyle}</p>
            <p>e-mail: {email}</p>
            <button variant="success" onClick={()=> props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCrown} /> Add Player</button>
            </div>
            
        </div>
    );
};

export default PlayerCard;