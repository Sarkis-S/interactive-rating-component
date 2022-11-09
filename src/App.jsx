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

    this.setState({ isSubmitted: true });
  }

  handleRating = (e) => {
    const value = e.target.innerText;
    this.setState({ rating: value });
  }

  render() {
    return (this.state.isSubmitted === false) ?
      (<main className="App">
        <SubmitCard handleRating={this.handleRating} handleSubmit={this.handleSubmit} />
      </main>) : 
      (<main className="App">
        <ThankYouCard rating={this.state.rating} />
      </main>);
  }
}

export default App;
