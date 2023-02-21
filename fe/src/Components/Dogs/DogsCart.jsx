import React, { useContext, useState } from 'react'
import { CartConext } from '../../Contexts/CartConext';
import "./Dogs.css"

function DogsCart({Id ,Name, Breed,Description,Price,imageUrl}) {
  const {setMyCart,setTotal} = useContext(CartConext);
  const [isAdded,setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded(true);
    const newItems = {
        Name: Name,
        Price :Price,
        imageUrl : imageUrl,
    };
        setMyCart((item) => [...item ,newItems]);
        setTotal((total) => (total += +Price));
  }
  return (
    <section  className='dogs'>
        <div className='dogs-info'> 
         <p>{Id}</p>
         <p>{Name}</p>
         <p>{Breed}</p>
        </div>
        <div className="dogs-img-container">
            <img className='dog-img' src={imageUrl} alt={`picture of:${Name}`}></img>
        </div>
        <div className="dogs-desc">{Description}</div>
        <div className="dogs-price">{Price}$</div>
        {isAdded ? (
            <button className='dogs-btn-disabled'>Added</button>
        ) : (
            <button className='dogs-btn'onClick={handleClick}>Add To Cart</button>
        )}
    </section>
  )
}

export default DogsCart