import { useSelector } from 'react-redux'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import Order from './Order'
import './Cart.css'
const Cart = (props) => {
  
  const cartList = useSelector(state => state.mealReducer.cartList)
  const total = useSelector(state => state.mealReducer.total) 
  
  return (
    <>
        {cartList.map((item) => (
          <>
            <div className='total'>
             <span>{item.name}</span>
             <span>${item.price}</span>
             </div>
          </>
        ))} 
         <span className='span'>Total Amount</span>
         <span className='span'>${total}</span>
         <Order/>
         <div className='action'>
             <button className='close'>Close</button>
             <button className='Order'>Order</button>
           </div>
    </>
  )
}

export default Cart