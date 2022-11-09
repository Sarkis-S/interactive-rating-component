import { Component } from 'react';
import './App.css';
import SubmitCard from './components/SubmitCard';
import ThankYouCard from './components/ThankYouCard';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      rating: 0,
      isSubmitted: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitted: true })
  }

  render() {
    return (this.state.isSubmitted === false) ?
      (<main className="App">
        <SubmitCard handleSubmit={this.handleSubmit} />
      </main>) : 
      (<main className="App">
        <ThankYouCard />
      </main>);
  }
}

export default App;
