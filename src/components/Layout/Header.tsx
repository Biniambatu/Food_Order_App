import React, { Fragment } from 'react'
import mealsImage from "../../assets/meals.jpg"
import classes from './header.module.css'
import HeaderCartButton from './HeaderCartButton'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <Link to='/'><h1>ReactMeals</h1></Link>
           <HeaderCartButton />  
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='image'/>
        </div>
    </Fragment>
  )
}

export default Header