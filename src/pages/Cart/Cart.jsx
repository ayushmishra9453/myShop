    import React ,{useContext} from 'react'
import { PRODUCTS } from '../../Products'
import {ShopContext} from '../../context/Shop-context'
import {CartItem} from './CartItem'
import { Navigate, useNavigate } from 'react-router-dom'
import './cart.css'
    const Cart = () => {
      const {cartItems , getTotalCartAmount} = useContext (ShopContext)
      const totalAmount=getTotalCartAmount()
  const navigate=useNavigate(); 
      return (
        <div className='cart'>
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="CartItems">
            {PRODUCTS.map((product)=>{
              if(cartItems[product.id]!==0)
              return <CartItem data={product} />
            })}
          </div>
          {totalAmount>0 ?
          <div className="checkout">
            <p>{`Subtotal :Rs ${totalAmount}`}</p>
            <button onClick={()=>navigate("/")}>Continue shoping </button>
            <button>Checkout</button>
          </div>
          :<h1>Your Cart is empty</h1>}
        </div>
      )
    }
    
    export default Cart
    