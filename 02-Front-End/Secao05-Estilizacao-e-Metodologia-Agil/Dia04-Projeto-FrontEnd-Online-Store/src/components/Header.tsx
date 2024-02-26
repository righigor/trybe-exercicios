import { ChangeEvent } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { HeaderProps } from '../types/types';

function Header({ setInputValue,
  inputValue,
  setProductList,
  setMessage }: HeaderProps) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = await getProductsFromCategoryAndQuery('', inputValue);
    const result = await data.results;
    setProductList(result);
    setMessage(false);
  };
  return (
    <>
      <header>
        <form action="">
          <label htmlFor="input">
            <input
              type="text"
              id="input"
              data-testid="query-input"
              placeholder="Buscar"
              onChange={ handleInput }
              value={ inputValue }
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ handleSubmit }
            >
              Enviar
            </button>
          </label>
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <button
            type="submit"
          >
            carrinho
          </button>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
