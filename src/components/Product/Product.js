import React from 'react'
import {MdControlPoint} from 'react-icons/md'
import './Product.css'

const Product = ({ product, onAddToCart }) => {
  const reg = /(<([^>]+)>)/gi;

  return (
    <article className='product'>
      <div>
        <img className='product--image' src={product.media.source} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price.formatted_with_code}</p>
        <p>{(product.description || "").replace(reg, "")}</p>
      </div>
      <div>
        <button 
          aria-label='Add to cart'
          onClick={() => onAddToCart(product.id, 1)}
        >
          <MdControlPoint /> cart</button>
      </div>
    </article>
  )
}

export default Product
