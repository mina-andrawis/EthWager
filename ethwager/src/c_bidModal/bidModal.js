import React, { useState } from "react";
import classnames from 'classnames';
import styles from "./bidModal.module.css";

import ConfirmationModal from "../c_confirmationModal/confirmationModal";

const BidModal = (props) => {

  const {setModal,projName, proj, userid} = props;

  var [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  var [bid, setBid] = useState(null);
  var [expirationLength, setExpirationLength] = useState(null);
  var [error, setError] = useState(false);

  if (expirationLength && bid)
  {
    console.log("bid and expiration:");
    console.log(bid);
    console.log(expirationLength);
  }

  const handleContinue = () => {
    if (bid && expirationLength) {
      setOpenConfirmationModal(true);
    }
    else {
      setError("Please enter both bid and expiration")
    }
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
        expirationLength={expirationLength}
        projName={projName} 
        floorprice={proj.floor_price}
        userid={userid}/>}

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
                      <button className={bid === 'bullish' ? classnames(styles.selected, styles.fancyButton, styles.bullishButton) : classnames(styles.fancyButton, styles.bullishButton)} 
                      onClick={() => setBid('bullish')}>
                        Bullish
                      </button>
                      <button className={bid === 'bearish' ? classnames(styles.selected, styles.fancyButton, styles.bearishButton) : classnames(styles.fancyButton, styles.bearishButton)} 
                      onClick={() => setBid('bearish')}>
                        Bearish
                      </button>
                  </div>
              </div>
              <div className={classnames(styles.bottom, styles.body)} >
                  <div className="expirationQuestion">
                      <p>When would you like this wager to expire?</p>
                  </div>
                  <div className="expirationButtons">
                      <button className={expirationLength === 15 ? classnames(styles.selected, styles.fancyButton, styles.expirationButton) : classnames(styles.fancyButton, styles.expirationButton)} onClick={() => setExpirationLength(15)}>
                        15 days
                      </button>
                      <button className={expirationLength === 30 ? classnames(styles.selected, styles.fancyButton, styles.expirationButton) :  classnames(styles.fancyButton, styles.expirationButton)} onClick={() => setExpirationLength(30)}>
                        30 days
                      </button>
                  </div>
              </div>
              <div className={styles.footer}>
              <button onClick={() => { setModal(false) }} className={styles.cancelBtn}>
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
    <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.titleCloseBtn}>
                <button onClick={() => { setModal(false) }}> 
                X
                </button>
            </div>
            <div className={styles.title}>
                <h1>{projName}</h1>            
                <h2>The floor price for this project is not available.</h2>
            </div>
            <div className={styles.body}>
                <p>Wagering is temporarily disabled until valid floor price data is retreived.</p>
            </div>
            <div className={styles.footer}>
            <button onClick={() => { setModal(false) }} className={styles.cancelBtn}>
                Cancel
            </button>
            </div>
        </div>
        </div>
  )
}

export default BidModal;