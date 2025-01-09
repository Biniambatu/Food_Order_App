import { useDispatch, useSelector } from 'react-redux'

import Order from './Order'
import './Cart.css'
import { useState } from 'react'
import { remove_from_cart } from '../../store/MealSlice'

const Cart = () => {
  
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.mealReducer.cartList)
  const total = useSelector(state => state.mealReducer.total) 
  const [ order, setOrder ] = useState(false)

  return (
    <>
        {cartList.map((item) => (
          <>
            <div className='total'>
             <span>{item.name}</span>
             <span>${item.price}</span>
             <button className='remove' onClick={() => dispatch(remove_from_cart(item))}>Remove</button>
            </div>
          </>
        ))} 
         <span className='span'>Total Amount</span>
         <span className='span'>${total}</span>
         {order && <Order/>}
         <div className='action'>
             <button className='close' onClick={() => setOrder(false)}>Close</button>
             <button className='Order' onClick={() => setOrder(true)}>Order</button> 
         </div>
    </>
  )
}

export default Cart