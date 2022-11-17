import illustration from '../images/illustration-thank-you.svg';

const ThankYouCard = ({ rating }) => {
  return (
    <main className="App">
      <div className="thank-you-container">
        <img className="illustration" src={illustration} alt="thank you illustration"></img>
        <h1 className="selection">You selected {rating} out of 5</h1>
        <h2 className="thank-you">Thank you!</h2>
        <h2>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</h2>
      </div>
    </main>
  );
}

export default ThankYouCard;
