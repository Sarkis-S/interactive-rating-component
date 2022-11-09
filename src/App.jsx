import React from 'react';
import './App.css';
import SubmitCard from './components/SubmitCard';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      rating: 0,
      isSubmitted: false
    }
  }

  render() {
    return (
      <main className="App">
        <SubmitCard />
      </main>
    );
  }
}

export default App;
