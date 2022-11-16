import { Component } from 'react';
import './App.css';
import SubmitCard from './components/SubmitCard';
import ThankYouCard from './components/ThankYouCard';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      rating: 5,
      isActive: '',
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
    this.setState({ isActive: e.target.id });
  }

  render() {
    return (this.state.isSubmitted === false) ?
      (<main className="App">
        <SubmitCard isActive={this.state.isActive} handleRating={this.handleRating} handleSubmit={this.handleSubmit} />
      </main>) : 
      (<main className="App">
        <ThankYouCard rating={this.state.rating} />
      </main>);
  }
}

export default App;
