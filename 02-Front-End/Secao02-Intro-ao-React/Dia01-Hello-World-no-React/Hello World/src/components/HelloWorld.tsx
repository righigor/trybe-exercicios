import Title from "./Title";
import ModuleDetails from "./ModuleDetails";
import CaculaIdade from "../utils/CalculaIdade";

function HelloWorld () {
  const nome = 'Igor Righi';
  const data = '13/09/1999';
  const age = CaculaIdade(data)

  return <div>
    <h1>{nome}</h1>
    <p>{`Idade: ${age} anos`}</p>
    <Title />
    <ModuleDetails />
  </div>
}

export default HelloWorld