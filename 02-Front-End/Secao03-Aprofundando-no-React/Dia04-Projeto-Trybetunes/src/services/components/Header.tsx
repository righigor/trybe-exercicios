import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { getUser } from '../userAPI';
import Loading from './Loading';

function Header() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const geraUser = async () => {
    const user = await getUser();
    setName(user.name);
    setLoading(false);
  };

  useEffect(() => { geraUser(); }, []);

  if (loading) return <Loading />;

  return (
    <>
      <header data-testid="header-component">
        <p data-testid="header-user-name">{ name }</p>
        <NavLink
          to="/search"
          data-testid="link-to-search"
        >
          Pesquisar
        </NavLink>
        <NavLink
          to="/favorites"
          data-testid="link-to-favorites"
        >
          Favoritos
        </NavLink>

        <NavLink
          to="/profile"
          data-testid="link-to-profile"
        >
          Profile
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
