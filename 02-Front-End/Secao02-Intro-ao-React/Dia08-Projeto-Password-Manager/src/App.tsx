import { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Form from './components/Form';
import { Senha } from './types';

function App() {
  const [exibeForm, setExibeForm] = useState(false);
  const [senhaCadastrada, setSenhaCadastrada] = useState([] as Senha[]);
  const [checked, setChecked] = useState(false);

  const exibeFormulario = () => {
    setExibeForm(true);
  };
  const exibeBtnCancel = () => {
    setExibeForm(false);
  };

  const handleSenha = (
    e: any,
    senha: Senha,
  ) => {
    e.preventDefault();
    setSenhaCadastrada([...senhaCadastrada, senha]);
    setExibeForm(false);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      timer: 1500,
    });
  };

  const removeSenha = (Servico: string) => {
    const senhasAtualizadas = senhaCadastrada.filter((senha) => {
      return senha.servico !== Servico;
    });
    setSenhaCadastrada(senhasAtualizadas);
  };

  return (
    <div>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>
      <div>
        { exibeForm
          ? <Form
              exibeBtnCancel={ exibeBtnCancel }
              handleSenha={ handleSenha }
          />
          : <button onClick={ exibeFormulario }>Cadastrar nova senha</button>}
      </div>
      <div>
        <label htmlFor="escondeSenha">
          Esconder senhas
          <input
            type="checkbox"
            name="escondeSenha"
            id="escondeSenha"
            checked={ checked }
            onClick={ () => setChecked(!checked) }
          />
        </label>
      </div>
      <ul>
        {senhaCadastrada.length ? senhaCadastrada.map((senha) => {
          return (
            <>
              <li key={ senha.servico }>
                <a href={ senha.url }>{ senha.servico }</a>
                <div>{ senha.login }</div>
                <div>
                  { checked ? '******' : senha.password }
                </div>
              </li>
              <button
                data-testid="remove-btn"
                onClick={ () => removeSenha(senha.servico) }
              >
                X
              </button>
            </>
          );
        }) : 'nenhuma senha cadastrada'}
      </ul>
    </div>
  );
}

export default App;
