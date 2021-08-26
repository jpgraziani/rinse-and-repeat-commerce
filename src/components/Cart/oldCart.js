import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/CartItem';
import './Cart.css'

const Cart = ({ myCart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  // console.log('testcart', myCart)
  // console.log('test line_items', myCart.line_items)

  // const EmptyCart = () => (
  //   <h2>cart is empty</h2>
  // );

  const handleEmptyCart = () => onEmptyCart();

  const EmptyCart = () => (
    <div>You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </div>
  );

  const FilledCart = () => (
    <article className='cart'>
      {myCart.line_items.map(item => (
        <section key={item.id}>
          <CartItem 
            item={item} 
            onUpdateCartQty={onUpdateCartQty} 
            onRemoveFromCart={onRemoveFromCart} 
          />
        </section>     
      ))}
      <section>
        <h3>Subtotal: {myCart.subtotal.formatted_with_code}</h3>
        <div>
          <button onClick={handleEmptyCart}>Empty Cart</button>
          <button>Checkout</button>
        </div>
      </section>
    </article>
  )

  if(!myCart.line_items) return <h2>Loading...</h2>

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {!myCart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart
