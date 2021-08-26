import React from 'react'
import Product from './Product'

const Products = ({ products, onAddToCart }) => {
  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <Product 
            product={product} 
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </>
  )
}

export default Products
