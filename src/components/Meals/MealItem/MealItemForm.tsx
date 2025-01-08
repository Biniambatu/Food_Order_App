// import { useDispatch } from 'react-redux'
// import { add_to_cart } from '../../../store/MealSlice'
// import Input from '../../UI/Input'
// import classes from './MealItemForm.module.css'


// const MealItemForm = (props) => {
//   const dispatch = useDispatch()
//   return (
//     <form className={classes.form}>
//         <Input label='Amount' inputs={{
//           id: 'amount',
//           type: 'number',
//           min: '1',
//           max: '5',
//           step: '1',
//           defaultValue: '1'
//         }}/>
//         <button onClick={() => dispatch(add_to_cart(props))}>+ Add</button>
//     </form>
//   )
// }

// export default MealItemForm