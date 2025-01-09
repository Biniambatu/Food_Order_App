import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../../store/MealSlice';
import '../../Cart/Cart.css'
import classes from './MealItem.module.css'
import { useEffect, useState } from 'react';
//import MealItemForm from './MealItemForm';
const MealItem = ({meals}:any) => {
  const {id, name, description, price} = meals
  
  const dispatch = useDispatch()
  const [isInCart, setIsInCart] = useState(false)
  const cartList = useSelector(state => state.mealReducer.cartList)
  useEffect(() => {
    const check = cartList.find(item => item.id === id)
    if(check){
      setIsInCart(true)
    }else(
      setIsInCart(false)
    )
  },[cartList, id])

  return (
   <li className={classes.meal}>
    <div>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      {isInCart ? ( <button className='remove' onClick={() => dispatch(remove_from_cart(meals))}>Remove</button>) : ( <button className='add' onClick={() => dispatch(add_to_cart(meals))}>Add</button>)}
    </div>
   </li>
  )
}

export default MealItem