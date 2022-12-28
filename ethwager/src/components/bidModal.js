import React from "react";
import {projectNames, projectSlugs} from "../common.js"
import "../styles/modal.css";

const BidModal = (props) => {
    const {setModal, proj} = props;

    console.log({proj});

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setModal(false);
            }}>
            X
          </button>
        </div>
        <div className="title">
            {/* add the name of the collection */}
          <h1>The floor price for this project is: {(proj.floor_price)} ETH</h1>
        </div>
        <div className="top optionsRow">
            <div className="bidQuestion">
                <p>Are you bullish or bearish?</p>
            </div>
            <div className="bidButtons">
                <button className="fancyButton bullishButton">Bullish</button>
                <button className="fancyButton bearishButton">Bearish</button>
            </div>
        </div>
        <div className="bottom optionsRow" >
            <div className="expirationQuestion">
                <p>When shall this wager expire?</p>
            </div>
            <div className="expirationButtons">
                <button className="fancyButton expirationButton">15 days</button>
                <button className="fancyButton expirationButton">30 days</button>
            </div>
        </div>

        <div className="footer">
          <button
            onClick={() => {
                setModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default BidModal;