import React from 'react';
import { FaCartPlus } from "react-icons/fa";
const Home = () => {
  return (
    <>
    <FaCartPlus className='add-to-cart' />
     <div className='cart-container'>
      <div className='img-container item'>
        <img src='/assets/shoe1.png' alt='Product' />
      </div>
      <div className='text-container item'>
        <span>Men's Shoes</span> <br />
        <span>Price: $50-/</span>
      </div>
      <div className='btn-container item'>
        <button>Add To Cart</button>
      </div>
     </div>
    </>
  );
}
export default Home;
