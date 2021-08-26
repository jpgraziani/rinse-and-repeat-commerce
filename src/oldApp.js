import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Route } from 'react-router-dom'
import { Products, NavBar, Cart } from './components/'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    //this is the new cart after item is added
    setCart(item.cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  } //we put qty in an object in params cause we only want to update the qty

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.update(productId);

    setCart(response.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []) //when depency array is blank it only only run at start

  // console.log(products)
  // console.log('cartApp', cart)

  return (
    <div>
      <NavBar
        totalItems={cart.total_items}
      />
      <Route exact path='/'>
        <Products 
          products={products}
          onAddToCart={handleAddToCart} 
        />
      </Route>
      <Route exact path='/cart'>
        <Cart 
          cart={cart}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
          onEmptyCart={handleEmptyCart}
        />
      </Route>
    </div>
  )
}

export default App
