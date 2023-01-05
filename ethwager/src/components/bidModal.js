import React, { useState } from "react";
import "../styles/modal.css";

const BidModal = (props) => {

  const {setModal,projName, proj} = props;

  var [bid, setBid] = useState('');
  var [expiration, setExpiration] = useState(-1)

  //if those state variables are set, change the color of the buttons

  if (bid !== '')
  {
    if (bid === 'bullish')
    {
      document.getElementsByClassName("bullishButton").style='#911';
    }
  }

  if (expiration !== -1)
  {
    console.log(expiration);
  }

  if (proj.floor_price)
  {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
              <button onClick={() => { setModal(false) }}> 
                  X
              </button>
          </div>
          <div className="title">
              <h1>{projName}</h1>            
              <h2>The floor price for this project is: {(proj.floor_price)} ETH</h2>
          </div>
          <div className="top body">
              <div className="bidQuestion">
                  <p>Are you bullish or bearish?</p>
              </div>
              <div className="bidButtons">
                  <button className={bid === 'bullish' ? 'selected fancyButton bullishButton' : 'fancyButton bullishButton'} onClick={() => setBid('bullish')}>
                    Bullish
                  </button>
                  <button className={bid === 'bearish' ? 'selected fancyButton bearishButton' : 'fancyButton bearishButton'} onClick={() => setBid('bearish')}>
                    Bearish
                  </button>
              </div>
          </div>
          <div className="bottom body" >
              <div className="expirationQuestion">
                  <p>When shall this wager expire?</p>
              </div>
              <div className="expirationButtons">
                  <button className={expiration === 15 ? "selected fancyButton expirationButton" : "fancyButton expirationButton"} onClick={() => setExpiration(15)}>
                    15 days
                  </button>
                  <button className={expiration === 30 ? "selected fancyButton expirationButton" : "fancyButton expirationButton"} onClick={() => setExpiration(30)}>
                    30 days
                  </button>
              </div>
          </div>
          <div className="footer">
          <button onClick={() => { setModal(false) }} id="cancelBtn">
              Cancel
          </button>
          <button>Continue</button>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => { setModal(false) }}> 
                X
                </button>
            </div>
            <div className="title">
                <h1>{projName}</h1>            
                <h2>The floor price for this project is not available.</h2>
            </div>
            <div className="body">
                <p>Wagering is temporarily disabled until valid floor price data is retreived.</p>
            </div>
            <div className="footer">
            <button onClick={() => { setModal(false) }} id="cancelBtn">
                Cancel
            </button>
            </div>
        </div>
        </div>
  )
}

export default BidModal;