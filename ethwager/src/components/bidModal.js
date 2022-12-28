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
          <h1>The floor price for this project is: {(proj.floor_price)} ETH</h1>
            {/*console.log({modal})*/}


        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
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