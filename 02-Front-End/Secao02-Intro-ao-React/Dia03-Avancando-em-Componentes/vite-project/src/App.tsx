import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';
import LottoNumbers from './components/LottoNumbers';

import './App.css';

function App() {
  const lotto = [2,3,4,5,6,7];
  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <LuckyNumbers />
      <LottoNumbers numbers={lotto}/>
    </>
  )
}

export default App
