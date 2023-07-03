import { useState, ChangeEvent } from 'react';
import { Senha } from '../types';

type FormProp = {
  exibeBtnCancel: () => void,
  handleSenha: (e: any, senha: Senha) => void,
};

function Form({ exibeBtnCancel, handleSenha }: FormProp) {
  const [servico, setServico] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const btnCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    exibeBtnCancel();
  };

  const handleServico = (e: ChangeEvent<HTMLInputElement>) => {
    setServico(e.target.value);
  };
  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const verificaForm = () => servico.length !== 0
    && login.length !== 0
    && password.length >= 8
    && password.length <= 16
    && /\d/.test(password)
    && /[a-zA-Z]/.test(password)
    && /[a-zA-Z0-9]/.test(password)
    && /[!@#$%^&*]/.test(password);

  const requisitosSenha = (requisito: string, verifica: boolean) => (
    <p
      className={ verifica
        ? 'valid-password-check'
        : 'invalid-password-check' }
    >
      { requisito }
    </p>
  );

  return (
    <form>
      <label htmlFor="servico">
        Nome do serviço
        <input
          type="text"
          id="servico"
          name="servico"
          required
          value={ servico }
          onChange={ handleServico }
        />
      </label>
      <br />
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          id="login"
          required
          value={ login }
          onChange={ handleLogin }
        />
      </label>
      <br />
      <label htmlFor="senha">
        Senha
        <input
          type="password"
          name="senha"
          id="senha"
          required
          value={ password }
          onChange={ handlePassword }
        />
      </label>
      <br />
      <div>
        {requisitosSenha(
          'Possuir 8 ou mais caracteres',
          password.length >= 8,
        )}
        {requisitosSenha(
          'Possuir até 16 caracteres',
          password.length <= 16,
        )}
        {requisitosSenha(
          'Possuir letras e números',
          /\d/.test(password) && /[a-zA-Z]/.test(password),
        )}
        {requisitosSenha(
          'Possuir algum caractere especial',
          /[!@#$%^&*]/.test(password),
        )}
      </div>
      <br />
      <label htmlFor="url">
        URL
        <input
          type="text"
          name="url"
          id="url"
          value={ url }
          onChange={ handleUrl }
        />
      </label>
      <br />
      <button
        disabled={ !verificaForm() }
        onClick={ (e) => handleSenha(e, { servico, login, password, url }) }
      >
        Cadastrar
      </button>
      <button onClick={ btnCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
