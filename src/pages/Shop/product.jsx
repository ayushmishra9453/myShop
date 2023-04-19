import React,{ useContext }  from 'react'
import {ShopContext} from '../../context/Shop-context'
 export const Product = (props) => {
  const {id,productName,price,productimage}=props.data;
 const {addToCart,cartItems} = useContext (ShopContext)
  const cartItemAmount=cartItems[id];
  console.log(cartItems)
  return (
    <div className='product'>
    <img src={productimage}/>
    <div className="description">
        <p><b>{productName}</b></p>
        <p>{`Rs ${price}`}</p>
    </div>
    <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
  }

