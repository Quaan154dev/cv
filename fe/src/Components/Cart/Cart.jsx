import React, { useContext } from 'react'
import "./Cart.css"
import { Link, useNavigate } from "react-router-dom";
import {BsFillTrash2Fill} from 'react-icons/bs'
import { CartConext } from '../../Contexts/CartConext';
function Cart({allDogs}) {
  const {myCart,total,setMyCart,setTotal} = useContext(CartConext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
      setTotal(0);
      setMyCart([{}]);
  }
  const handleHome = () => {
    navigate('/home')
  }
  const handleDelete = (index) => {
    const newDogList = myCart.filter((Dog, newDog) => newDog !== index);
    console.log(newDogList);
    setMyCart(newDogList);
    setTotal((total) => (total -= +allDogs.Price));
    console.log(allDogs.Price);
  }
  return (
     <section className='cart-container'>
          <div className="cart-header"> CHECKOUT :</div>
          <div className="cart-items">
           {myCart.slice(1).map((item,index) => {
              return(
                <div className="cart-item">
                  <div className="main">
                     <img src={item.imageUrl} alt={`picture of:${item.Name}`}  className='cart-item-img'/>
                     {item.Name} : {item.Price}$
                  </div>
                  <BsFillTrash2Fill 
                  onClick={() => handleDelete (index + 1)}
                  className='delete-icon' size='1.3em'></BsFillTrash2Fill>
                </div>
              )
           })}
           <div className="cart-total">Total: {total}$</div>
           <div className="main-click">
              <button className='cart-checkout' onClick={handleCheckOut}>DONE</button>
              <button className="cart-gohome"onClick={handleHome} > Return Home</button>
           </div>
          </div>
     </section>
  )
}

export default Cart