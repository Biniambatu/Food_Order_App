import { Fragment, useState } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import AllRoutes from "./Routes/AllRoutes"



function App() {
//  const [cartIsShown, setCartIsShown] = useState(false)
 
//  const showCart = () => {
//     setCartIsShown(true)
//  };
 
//  const hideCart = () => {
//     setCartIsShown(false)
//  };
  return (
   <>
     {/* {cartIsShown && <Cart onClose={hideCart}/>} */}
   
     <Header />
     <AllRoutes/>
          {/* <main>
       <Meals/>
     </main> */}
   </>
  )
}

export default App
