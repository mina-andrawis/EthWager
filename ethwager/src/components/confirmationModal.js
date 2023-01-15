import React, { useState } from "react";
import classnames from 'classnames';
import styles from "../styles/confirmationModal.module.css";
import bearishImage from "../images/icons8-bearish-32.png";
import bullishImage from "../images/icons8-bullish-32.png";



const ConfirmationModal = (props) => {
  const { showBidModal,  proj, bid, expiration, projName, floorprice} = props;

  var currDate = new Date();
  var expirationDate = new Date();
  expirationDate.setDate(currDate.getDate() + expiration);


  const handleConfirm = () => {
    // Perform some action with the bid and expiration values here, such as sending a request to a server to create a new wager
    // console.log(`Confirmed bid: ${bid}, expiration: ${expiration} days`);
  };
  
  const handleVelocity = bid => bid === 'bullish' ? 'above' : 'below';

  const handleIcon = bid => {

  if (bid === 'bullish') {
    return <img alt="bullish icon" src={bullishImage} />;
  } else if (bid === 'bearish') {
    return <img alt="bearish icon" src={bearishImage} />
    }
  }


  return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.title}>
            <h1>{projName}</h1>
            <h2>The floor price for this project is: {floorprice} ETH</h2>
            <p><mark>In order to recieve WAGER upon expiration, the floor price must be {handleVelocity(bid)} {floorprice} ETH
            for a mimumum of {Math.round((expiration/2))} days.</mark></p>
            <table>
              <tbody>
                <tr>
                  <td>Bid : {bid.charAt(0).toUpperCase() + bid.slice(1)} {handleIcon(bid)}</td>
                </tr>
                <tr>
                  <td>Expires on {expirationDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute: 'numeric' })}</td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className={styles.body}>
 
            <p>Are you sure you want to place a {bid} bid with an expiration of {expiration} days?</p>

          </div>
          <div className={styles.footer}>
            <button className={classnames(styles.cancelButton, styles.fancyButton)} onClick={() =>showBidModal(false)}>Cancel</button>
            <button className={classnames(styles.fancyButton)}onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
  );
}

export default ConfirmationModal;
