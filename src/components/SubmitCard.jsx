import React from 'react';

const SubmitCard = ({ handleSubmit }) => {
  return (
    <div className="submit-container">
      <span className="fa fa-star checked"></span><br />

      <h1>How did we do?</h1>

      <h2>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>

      <p>1 2 3 4 5</p><br/>

      <button type="submit" onClick={handleSubmit}>Submit</button>

      {/* Rating state end */}

      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge"target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  )
}

export default SubmitCard;
