import React, { useEffect, useState } from "react";
import BidModal from "./bidModal.js"
import {projectNames, projectSlugs} from "../common.js"
import "../styles/displayTable.css"

const DisplayTable = () => {

  const [nfts, setNfts] = useState([]);
  const [openBidModel, setOpenBidModal] = useState(-1);

  useEffect(() => {
    Promise.all(projectSlugs.map(slug =>
      fetch(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
      .then(response => response.json())
      )).then(responses => {
        console.log(responses)
        setNfts(responses);
    });
  }, []);

  function format( num ){

    var formatted = (Math.floor(num * 1000)/1000)  // slice decimal digits after the 2nd one
    .toFixed(2)  // format with two decimal places
    .substr(0,4) // get the leading four characters
    .replace(/\.$/,''); // remove trailing decimal place separator

    return ( formatted == 0.00 ? "—" : `${formatted} ETH`)
  }

  var id = 0;

  return (

    <div>
      {/*The setOpenBidModal function is passed as a prop to the BidModal component.
       This function can be used within the BidModal component to change the value of openBidModel*/}
      {openBidModel != -1 && <BidModal setModal={setOpenBidModal} />}
      <div className="styled-table">
        <table>
          <thead>
            <tr>
              <th>Collection</th>
              <th>Floor Price</th>
              <th>Market Cap</th>
              <th>Volume (30d)</th>
              <th>Volume Delta (30d)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {nfts.map((nft,index) => (
              <tr key={index}>
                <td>{projectNames[index]}</td>
                <td>{format(nft.stats.floor_price)}</td>
                <td>{format(nft.stats.market_cap)}</td>
                <td>{format(nft.stats.thirty_day_volume)}</td>
                <td>{format(nft.stats.thirty_day_difference)}</td>

                <td>
                  <button className="selection" 
                  onClick={() => setOpenBidModal(index)}> bid </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    
  )

}

export default DisplayTable;