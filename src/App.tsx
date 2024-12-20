import { Fragment, useState } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Card from "./components/UI/Card"


function App() {
 const [cartIsShown, setCartIsShown] = useState(false)
 
 const showCart = () => {
    setCartIsShown(true)
 };
 
 const hideCart = () => {
    setCartIsShown(false)
 };
  return (
   <>
     {cartIsShown && <Card onClose={hideCart}/>}
     <Header onShowCart={showCart}/>
     <main>
       <Meals/>
     </main>
   </>
  )
}

export default App
