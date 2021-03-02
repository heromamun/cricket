import React, { useEffect, useState } from 'react';
import playerData from '../../PlayerData/PlayerData.json';
import Cart from '../Cart/Cart';
import './Player.css';
import PlayerCard from './PlayerCard/PlayerCard';
import 'bootstrap/dist/css/bootstrap.min.css';



const Player = () => {
    const [player, setPlayer] = useState([]);
    useEffect(()=>{
        setPlayer(playerData)
    }, [])
    
    const handleAddPlayer=(player)=>{
        console.log('add click', player)
        const newCart =[...cart,player,];
        setCart(newCart);

    }
    const[cart, setCart] = useState([]); 
    return (
        <div className="container">
        <div className="player-container">   
            {
                player.map(player=><PlayerCard 
                    handleAddPlayer={handleAddPlayer}
                    id={player.id}
                     player={player}>
                     </PlayerCard>)
            }
        </div>
        
        <div className="Player-cart">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Player;