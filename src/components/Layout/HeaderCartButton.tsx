
import { Link } from "react-router-dom"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import { useSelector } from "react-redux"

const HeaderCartButton = (props) => {
  const cartList = useSelector(state => state.mealReducer.cartList)

  return (
    <Link to='/cart'>
    <button className={classes.button} >
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartList.length}</span>
    </button>
    </Link>
  )
}

export default HeaderCartButton