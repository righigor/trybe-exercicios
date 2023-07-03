import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../services/components/Loading';

function Login() {
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNome = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };
  const verificaNome = () => nome.length >= 3;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    createUser({ name: nome })
      .then(() => {
        setLoading(false);
        navigate('/search');
      });
  };

  if (loading) return (<Loading />);

  return (
    <form>
      <label htmlFor="seuNome">
        <input
          type="text"
          name="seuNome"
          data-testid="login-name-input"
          placeholder="Nome"
          value={ nome }
          onChange={ handleNome }
        />
      </label>
      <button
        data-testid="login-submit-button"
        disabled={ !verificaNome() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
