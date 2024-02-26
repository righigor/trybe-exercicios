import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductInfo from './pages/ProductInfo';
// eslint-disable-next-line import/no-named-as-default
import Header from './components/Header';
import { Product } from './types/types';

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setMessage] = useState(true);
  const [shoppingList, setShoppingList] = useState<Product[]>([]);

  return (

    <Routes>
      <Route
        element={
          <Header
            inputValue={ inputValue }
            setInputValue={ setInputValue }
            setProductList={ setProductList }
            setMessage={ setMessage }
          />
          }
      >
        <Route
          path="/"
          element={
            <Home
              setProductList={ setProductList }
              productList={ productList }
              showMessage={ showMessage }
              shoppingList={ shoppingList }
              setShoppingList={ setShoppingList }
            />
            }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              shoppingList={ shoppingList }
              setShoppingList={ setShoppingList }
            />
            }
        />
        <Route
          path="/product-info/:id"
          element={
            <ProductInfo
              shoppingList={ shoppingList }
              setShoppingList={ setShoppingList }
            />
}
        />
      </Route>
    </Routes>

  );
}

export default App;
