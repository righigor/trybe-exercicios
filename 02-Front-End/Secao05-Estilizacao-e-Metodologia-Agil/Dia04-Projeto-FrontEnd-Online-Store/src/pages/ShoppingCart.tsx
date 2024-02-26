import { ShoppingCartProp } from '../types/types';
import ShowCartList from '../components/ShowCartList';

function ShoppingCart({ shoppingList, setShoppingList }: ShoppingCartProp) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        { shoppingList.length < 1
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)
          : shoppingList.map((p) => (
            <div key={ p.id }>
              <ShowCartList
                shoppingList={ p }
                setShoppingList={ setShoppingList }
              />
            </div>))}
      </div>

    </div>
  );
}
export default ShoppingCart;
