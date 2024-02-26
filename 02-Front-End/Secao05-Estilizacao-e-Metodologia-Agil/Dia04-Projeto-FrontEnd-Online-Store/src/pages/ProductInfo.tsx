import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { Product, ShoppingCartProp } from '../types/types';

function ProductInfo({ shoppingList, setShoppingList }: ShoppingCartProp) {
  const { id = '' } = useParams();
  const [productInfo, setProductInfo] = useState<Product>({
    id: '',
    title: '',
    price: 0,
    condition: '',
    thumbnail: '',
    availablityQuantity: 0,
    shipping: { free_shipping: false },
    quantity: 1,
  });

  useEffect(() => {
    const fetchProductInfo = async () => {
      const productInfoApi = await getProductById(id);
      setProductInfo(productInfoApi);
    };
    fetchProductInfo();
  }, [id]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const getLocalStorage = JSON.parse(localStorage.getItem('Item') ?? '[]');
    const foundLS = getLocalStorage.some((item: Product) => {
      return item.id === productInfo.id;
    });
    let nova = getLocalStorage;
    if (foundLS) {
      nova = getLocalStorage.map((item: Product) => {
        if (item.id === productInfo.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      nova = [
        ...getLocalStorage,
        {
          ...productInfo,
          quantity: 1,
        },
      ];
    }
    localStorage.setItem('Item', JSON.stringify(nova));
    setShoppingList(nova);
  };

  return (
    <div>
      <div>
        <img src={ productInfo.thumbnail } alt="" data-testid="product-detail-image" />
        <h1 data-testid="product-detail-name">{ productInfo.title }</h1>
        <p data-testid="product-detail-price">{ productInfo.price }</p>
        <p>{ productInfo.condition}</p>
      </div>
      <button
        type="submit"
        data-testid="product-detail-add-to-cart"
        onClick={ handleSubmit }
      >
        Adicionar ao carrinho

      </button>
    </div>
  );
}

export default ProductInfo;
