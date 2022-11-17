import React from 'react';

const SubmitCard = ({ handleRating, handleSubmit, isActive }) => {
  return (
    <div className="submit-container">
      <span className="fa fa-star checked"></span><br />

      <h1>How did we do?</h1>

      <h2>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>

      <div className="btn">
        <button
          id={'1'}
          className={isActive === '1' ? 'active' : undefined}
          onClick={handleRating}>1
        </button>
        <button id={'2'}
          className={isActive === '2' ? 'active' : undefined}
          onClick={handleRating}>2
        </button>
        <button id={'3'}
          className={isActive === '3' ? 'active' : undefined}
          onClick={handleRating}>3
        </button>
        <button id={'4'}
          className={isActive === '4' ? 'active' : undefined}
          onClick={handleRating}>4
        </button>
        <button id={'5'}
          className={isActive === '5' ? 'active' : undefined}
          onClick={handleRating}>5
        </button>
      </div>

      <button className="submit-btn" type="submit" onClick={handleSubmit}>S U B M I T</button>

      {/* Rating state end */}

      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge"target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  )
}

export default SubmitCard;
