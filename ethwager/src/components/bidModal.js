import React from "react";
import {projectNames, projectSlugs} from "../common.js"
import "../styles/modal.css";

function BidModal({ setModal }) {
console.log("inside");

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setModal(-1);
            }}>
            X
          </button>
        </div>
        <div className="title">
          <h1>The project you chose was: {projectNames.at(setModal)} </h1>
            {console.log(projectNames.at(setModal))}
            {console.log(setModal)}

        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
                setModal(-1);
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