import { Link } from 'react-router-dom';
import { ProductListProp } from '../types/types';

function ProductList(prop: ProductListProp) {
  const { title, thumbnail,
    price, id, shipping, availablityQuantity, shoppingList, setShoppingList } = prop;

  const product = {
    id,
    title,
    thumbnail,
    price,
    availablityQuantity,
    shipping,
    quantity: 1,
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProduct = { ...product, quantity: 1 };
    const newShoppingList = [...shoppingList, newProduct];
    setShoppingList([...newShoppingList]);
  };

  return (
    <>
      <Link to={ `/product-info/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ thumbnail } alt="" />
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
      </Link>
      <button
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ handleSubmit }
      >
        Adicionar ao carrinho

      </button>

    </>
  );
}

export default ProductList;
