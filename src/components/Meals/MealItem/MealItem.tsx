import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../../store/MealSlice';
import classes from './MealItem.module.css'
//import MealItemForm from './MealItemForm';
const MealItem = (props:any) => {

  const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch()
  return (
   <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      {/* <MealItemForm /> */}
      <button onClick={() => dispatch(add_to_cart(props))}>Add</button>
    </div>
   </li>
  )
}

export default MealItem