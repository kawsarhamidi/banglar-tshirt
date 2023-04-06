import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveFromCart }) => {
    let Message;
    if (cart.length === 0) {
        Message = <p>Please add some products</p>
    }
    else {
        Message = <div className="">
            <h3>BoroLoox</h3>
            <p><small>thanks for giving for mane</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>order summary:{cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'purple' : 'green'}`}>something</p>
            {cart.length > 2 ? <span className='hotpink'>aro Kino</span> : <span>fokira</span>}
            {Message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handelRemoveFromCart(tshirt._id)}>x</button> </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * conditional rendering
 * 1. use if else to set a variable that will contain an element, components
 */