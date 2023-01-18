import React, { useState} from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false)
  const classed = addCart ? 'in-cart' : '';
  const stated = addCart ? 'Remove From Cart': 'Add to Cart';

  function addingToCart (){
    setAddCart(!addCart)

   
  }
  return (
    <li className={classed}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addingToCart}>{stated}</button>
    </li>
  );
}

export default Item;
