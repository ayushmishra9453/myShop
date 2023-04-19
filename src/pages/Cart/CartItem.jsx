import React,{useContext} from 'react'
import {ShopContext} from '../../context/Shop-context'
 export function CartItem(props) {
    const {id,productName,price,productimage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext (ShopContext)
  return (
    <div className='cartItem'>
      <img src={productimage}  />
      <div className="description">
        <p><b>{productName}</b></p>
        <p><b>{`Rs ${price}`}</b></p>
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id )} />
          <button  onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

