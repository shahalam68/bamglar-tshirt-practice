import React from 'react'; 
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,price, picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p><small>{price}</small></p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;