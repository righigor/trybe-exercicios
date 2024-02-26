import { HomeProps } from '../types/types';
import Categories from '../components/Categories';

function Home({ setProductList,
  productList,
  showMessage,
  shoppingList,
  setShoppingList }: HomeProps) {
  return (
    <div>
      <div>
        <Categories
          productList={ productList }
          setProductList={ setProductList }
          shoppingList={ shoppingList }
          setShoppingList={ setShoppingList }
        />
      </div>
      <div>
        {showMessage === true
          ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
          : null}
      </div>
      {/* <div>

        {productList.length === 0 && !showMessage
          ? (
            <p>
              Produto não encontrado
            </p>)
          : (
            <div>
              <ul>
                {productList.map((p) => (
                  <li key={ p.id }>
                    <ProductList
                      id={ p.id }
                      title={ p.title }
                      thumbnail={ p.thumbnail }
                      price={ p.price }
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) }

      </div> */}
      {/* <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Shop Cart
        </Link>
      </div> */}
    </div>

  );
}

export default Home;
