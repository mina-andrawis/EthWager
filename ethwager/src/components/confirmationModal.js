import React, { useState } from "react";
import classnames from 'classnames';
import styles from "../styles/confirmationModal.module.css";

const ConfirmationModal = (props) => {
  const { showBidModal,  proj, bid, expiration, projName, floorprice} = props;
  const handleConfirm = () => {
    // Perform some action with the bid and expiration values here, such as sending a request to a server to create a new wager
    // console.log(`Confirmed bid: ${bid}, expiration: ${expiration} days`);
  };

  return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.title}>
            <h1>{projName}</h1>
            <h2>The floor price for this project is: {floorprice} ETH</h2>
            <p>Are you sure you want to place a {bid} bid with an expiration of {expiration} days?</p>
            
          </div>
          <div className={styles.body}>

            <table>
              <tbody>
                <tr>
                  <td>Bid</td>
                  <td>{bid}</td>
                </tr>
                <tr>
                  <td>Expiration</td>
                  <td>{expiration} days</td>
                </tr>
              </tbody>
            </table>

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
