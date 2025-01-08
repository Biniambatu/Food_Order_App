import React from 'react'
import "./Form.css"
const Order = () => {
  return (
    <form action="">
        Your Name: <input type="text" />
        Street: <input type="text" />
        Postal Code: <input type="number" />
        <button>Confirm</button>
    </form>
  )
}

export default Order