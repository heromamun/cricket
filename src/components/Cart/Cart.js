import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, player) =>parseInt(total + player.salary,0));
   
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total =total + parseInt(player.salary);
    }

    let totalName = "";
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalName =(totalName + player.name + " , ");
        
    }

    return (
        <div>
            <h1>Team Information</h1>
            <p>Selected Player:{cart.length}</p>
            <div className="player-name">
                <p>Selected Player Name: {totalName}  </p>
            </div>
            <p>Total Salary: ${total}</p>
        </div>
    );
};

export default Cart;