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

  // The render method will return 1 of 2 components depending if the user submitted a rating or not
  // We are using a ternary operator here. By default isSubmitted is false on line 13
  render() {
    return (this.state.isSubmitted === false) ?
      (<SubmitCard isActive={this.state.isActive} handleRating={this.handleRating} handleSubmit={this.handleSubmit} />) : 
      (<ThankYouCard rating={this.state.rating} />);
  }
}

export default App;
