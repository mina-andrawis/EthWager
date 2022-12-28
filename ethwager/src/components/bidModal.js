import React from "react";
import {projectNames, projectSlugs} from "../common.js"
import "../styles/modal.css";

const BidModal = (props) => {
    const {setModal,projName, proj} = props;

    if (!proj.floor_price)
    {
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
                        <h2>The floor price for this project is not available</h2>
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
                <button className="fancyButton bullishButton">Bullish</button>
                <button className="fancyButton bearishButton">Bearish</button>
            </div>
        </div>
        <div className="bottom body" >
            <div className="expirationQuestion">
                <p>When shall this wager expire?</p>
            </div>
            <div className="expirationButtons">
                <button className="fancyButton expirationButton">15 days</button>
                <button className="fancyButton expirationButton">30 days</button>
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

export default BidModal;