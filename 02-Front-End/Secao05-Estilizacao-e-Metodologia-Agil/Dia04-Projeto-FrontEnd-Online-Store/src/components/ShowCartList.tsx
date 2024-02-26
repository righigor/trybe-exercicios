import { useState } from 'react';
import { ShowShoppingCartProp } from '../types/types';

function ShowCartList({ shoppingList, setShoppingList }: ShowShoppingCartProp) {
  const handleSub = () => {
    if (shoppingList.quantity > 1) {
      const less = shoppingList.quantity - 1;
    }
  };

  const handleAdd = () => {
    const plus = qunatity + 1;
    setquantity(plus);
  };

  console.log(shoppingList);
  return (
    <div data-testid="product">
      <img src={ shoppingList.thumbnail } alt="" />
      <h1 data-testid="shopping-cart-product-name">{shoppingList.title}</h1>
      <p>{shoppingList.price}</p>
      <div>
        <button
          data-testid="product-decrease-quantity"
          onClick={ handleSub }
        >
          -

        </button>
        <p data-testid="shopping-cart-product-quantity">{ qunatity }</p>
        <button
          data-testid="product-increase-quantity"
          onClick={ handleAdd }
        >
          +

        </button>
      </div>
    </div>
  );
}
export default ShowCartList;
