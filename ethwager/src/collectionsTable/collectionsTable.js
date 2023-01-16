import useToken from "../hooks/useToken"
import React, { useEffect, useState } from "react";
import BidModal from "../bidModal/bidModal.js"
import {projectNames, projectSlugs} from "../common.js"
import styles from "./collectionsTable.module.css";

const CollectionsTable = () => {

  const [collections, setCollections] = useState([]);
  const [openBidModel, setOpenBidModal] = useState(false);
  const [selectedProj, setSelectedProj] = useState('');
  const [selectedProjName, setSelectedProjName] = useState('');
  const { token } = useToken();
  
  useEffect(() => {
    Promise.all(projectSlugs.map(slug =>
      fetch(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
      .then(response => response.json())
      )).then(responses => {
        setCollections(responses);
    });
  }, []);

  const format = (num) => {
    var formatted = (Math.floor(num * 1000)/1000).toFixed(2).substr(0,4).replace(/\.$/,'');

    return ( formatted === "0.00" ? "—" : `${formatted} ETH`)
  }

  const handleOpenModal = (collecName,collection,openStatus) => {
    setOpenBidModal(openStatus);
    setSelectedProj(collection.stats);
    setSelectedProjName(collecName)
  };

  return (
    <>
      {/*The setOpenBidModal function is passed as a prop to the BidModal component.
       This function can be used within the BidModal component to change the value of openBidModel*/}
      {openBidModel !== false && <BidModal 
        setModal={setOpenBidModal}
        projName={selectedProjName}
        proj={selectedProj}
        userid={token._id}
         />}
      <div className={styles.styledTable}>
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
            {collections.map((collection,index) => (
              <tr key={index}>
                <td className={styles.tableData}>{projectNames[index]}</td>
                <td className={styles.tableData}>{format(collection.stats.floor_price)}</td>
                <td className={styles.tableData}>{format(collection.stats.market_cap)}</td>
                <td className={styles.tableData}>{format(collection.stats.thirty_day_volume)}</td>
                <td className={styles.tableData}>{format(collection.stats.thirty_day_difference)}</td>
                <td>
                  <button className={styles.selection}
                  onClick={() => handleOpenModal(projectNames[index],collection,true)}> bid </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CollectionsTable;