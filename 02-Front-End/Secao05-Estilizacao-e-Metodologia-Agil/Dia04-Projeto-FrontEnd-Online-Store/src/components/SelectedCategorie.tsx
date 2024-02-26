import { useEffect } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
import { ParamIdProp } from '../types/types';

function SelectedCategorie({ paramId,
  productList, setProductList, shoppingList, setShoppingList }: ParamIdProp) {
  useEffect(() => {
    const fetchSelectedCateghorie = async () => {
      const data = await getProductsFromCategoryAndQuery(paramId, '');
      const result = await data.results;
      setProductList(result);
    };
    fetchSelectedCateghorie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramId]);
  return (
    <div>
      {productList.map((p) => (
        <div key={ p.id }>
          <ProductList
            id={ p.id }
            title={ p.title }
            thumbnail={ p.thumbnail }
            price={ p.price }
            availablityQuantity={ p.availablityQuantity }
            shipping={ p.shipping }
            shoppingList={ shoppingList }
            setShoppingList={ setShoppingList }
          />
        </div>
      ))}

    </div>
  );
}

export default SelectedCategorie;
