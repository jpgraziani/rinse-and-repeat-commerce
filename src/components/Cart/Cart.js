import React from 'react';
// import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  const renderEmptyCart = () => (
    <div>You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </div>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <section>
      <div>
        {cart.line_items.map((lineItem) => (
          <div key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))}
      </div>
        <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        <div>
          <button type="button" onClick={() => onEmptyCart()}>Empty cart</button>
          <button component={Link} to="/checkout" type="button">Checkout</button>
        </div>
    </section>
  );

  return (
    <div>
      <p>Your Shopping Cart</p>
      { cart.line_items.length ===0 ? renderEmptyCart() : renderCart() }
    </div>
  );

};

export default Cart;
