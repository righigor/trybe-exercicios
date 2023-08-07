import React from 'react'
import RandomNumber from './components/RandomNumber';
import './App.css'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <RandomNumber
        max={ 5 }
      />
    )
  }
}

export default App;
