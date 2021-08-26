import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  return (
    <div >
      <img src={item.media.source} alt={item.name} />
      <div>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.line_total.formatted_with_symbol}</p>
      </div>
      <div>
        <div>
          <button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
          <p>&nbsp;{item.quantity}&nbsp;</p>
          <button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <button type="button" onClick={() => onRemoveFromCart(item.id)}>Remove Single Item</button>
      </div>
    </div>
  );
};

export default CartItem;