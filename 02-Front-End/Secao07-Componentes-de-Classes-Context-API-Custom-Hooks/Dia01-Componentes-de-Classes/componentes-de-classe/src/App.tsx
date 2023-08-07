import React from 'react'
import RandomNumber from './components/RandomNumber';
import './App.css'

type AppState = {
  showRandomNumber: boolean,
};

class App extends React.Component<object, AppState> {
  state = {
    showRandomNumber: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({showRandomNumber: !prevState.showRandomNumber}));
  };

  render(): React.ReactNode {
    const { showRandomNumber } = this.state;

    return (
      <>
      <button
        onClick={ this.handleClick }
      >
        { showRandomNumber ? 'hide' : 'show' }
      </button>
      {showRandomNumber
        ? (<RandomNumber max={100} />)
        : <h1>?</h1>
      }
      </>
    )
  }
}

export default App;
