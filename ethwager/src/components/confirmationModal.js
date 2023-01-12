import React, { useState } from "react";
import "../styles/confirmationModal.css";

const ConfirmationModal = (props) => {
  const { handleClose,proj, projName, floorprice} = props;

  const handleConfirm = () => {
    // Perform some action with the bid and expiration values here, such as sending a request to a server to create a new wager
    // console.log(`Confirmed bid: ${bid}, expiration: ${expiration} days`);
  };

  //handleClose(false);
  console.log('hi');


  return (
    <div className="modalBackground">
      <div className="cMmodalContainer">
        <div className="titleCloseBtn">
          <button onClick={handleClose()}>X</button>
        </div>
        <div className="modal-title">
          <h1>{projName}</h1>
          {floorprice && (
            <h2>The floor price for this project is: {floorprice} ETH</h2>
          )}
        </div>
        <div className="modal-body">
          {/* <p>Are you sure you want to place a {bid} bid with an expiration of {expiration} days?</p> */}
        </div>
        <div className="modal-footer">
          <button onClick={handleClose()}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
