import React, { useState } from "react";
import "../styles/confirmationModal.css";

const ConfirmationModal = (props) => {
  const { proj, projName, bid, expiration, setModal } = props;

  const handleConfirm = () => {
    // Perform some action with the bid and expiration values here, such as sending a request to a server to create a new wager
    console.log(`Confirmed bid: ${bid}, expiration: ${expiration} days`);
    setModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="cMmodalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>{projName}</h1>
          {proj.floor_price && (
            <h2>The floor price for this project is: {proj.floor_price} ETH</h2>
          )}
        </div>
        <div className="modal-body">
          <p>Are you sure you want to place a {bid} bid with an expiration of {expiration} days?</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
