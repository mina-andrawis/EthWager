import React, { useState } from "react";
import classnames from 'classnames';
import styles from "../styles/bidModal.module.css";

import ConfirmationModal from "./confirmationModal";

const BidModal = (props) => {

  const {setModal,projName, proj} = props;

  var [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  var [bid, setBid] = useState(null);
  var [expiration, setExpiration] = useState(null);
  var [error, setError] = useState(false);

  if (expiration && bid)
  {
    console.log("bid and expiration:");
    console.log(bid);
    console.log(expiration);
  }

  const handleContinue = () => {
    if (bid && expiration) {
      setOpenConfirmationModal(true);
    }
    else {
      setError("Please enter both bid and expiration")
    }
  } 

  const handleConfirmationClose = () => {
    //setOpenConfirmationModal(false);
  }

  if (proj.floor_price)
  {
    return (
      <> 
        {/* pass callback function as handleClose to close the child component from inside ConfirmationModal*/}
        {openConfirmationModal
        && <ConfirmationModal 
        showBidModal={setModal}
        showConfirmationModal={setOpenConfirmationModal}
        bid={bid} 
        expiration={expiration}
        projName={projName} 
        floorprice={proj.floor_price}/>}

        {!openConfirmationModal &&
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <div className={styles.titleCloseBtn}>
                  <button onClick={() => { setModal(false) }}> 
                      X
                  </button>
              </div>
              <div className={styles.title}>
                  <h1>{projName}</h1>            
                  <h2>The floor price for this project is: {(proj.floor_price)} ETH</h2>
              </div>
              <div className={classnames(styles.top, styles.body)}>
                  <div className="bidQuestion">
                      <p>Are you bullish or bearish?</p>
                  </div>
                  <div className={styles.bidButtons}>
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
                      <p>When would you like this wager to expire?</p>
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
              <button onClick={handleContinue}>Continue</button>
              </div>
              {error && <div className={classnames(styles.error, styles.message)}> {error} </div>}
            </div>
          </div>
        } 
      </>
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