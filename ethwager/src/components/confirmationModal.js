import React, { useState } from "react";
import "../styles/confirmationModal.css";

const ConfirmationModal = (props) => {
  const { showBidModal,  proj, bid, expiration, projName, floorprice} = props;
  const handleConfirm = () => {
    // Perform some action with the bid and expiration values here, such as sending a request to a server to create a new wager
    // console.log(`Confirmed bid: ${bid}, expiration: ${expiration} days`);
  };

  console.log('hi');

  return (
    <div classname="confirm">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <h1>{projName}</h1>
            <h2>The floor price for this project is: {floorprice} ETH</h2>
          </div>
          <div className="body">
            <p>Are you sure you want to place a {bid} bid with an expiration of {expiration} days?</p>
          </div>
          <div className="footer">
            <button className="cancelButton" onClick={() =>showBidModal(false)}>Cancel</button>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
