import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import SelectedCategorie from './SelectedCategorie';
import { CategoriesProp } from '../types/types';

function Categories({ productList,
  setProductList, shoppingList, setShoppingList }: CategoriesProp) {
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [checkState, setCheckState] = useState<string>('');

  const handleInputChange = (event: string) => {
    // const noMLBid = event.target.value.substring(3);
    setCheckState(event);
  };

  useEffect(() => {
    const list = async () => {
      const categories = await getCategories();
      setCategoriesList(categories);
    };
    list();
  }, []);

  return (
    <div>

      <form>
        {categoriesList.map((categorie) => (
          <div key={ categorie.id }>
            <input
              type="radio"
              name="categorie"
              value={ categorie.id }
              onChange={ () => handleInputChange(categorie.id.replace('MLB', '')) }
            />
            <label data-testid="category">{ categorie.name }</label>
          </div>
        ))}
      </form>
      <SelectedCategorie
        paramId={ checkState }
        productList={ productList }
        setProductList={ setProductList }
        shoppingList={ shoppingList }
        setShoppingList={ setShoppingList }
      />

    </div>
  );
}

export default Categories;
