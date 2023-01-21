import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './allWagers.module.css';
import useToken from "../hooks/useToken";
import expiredIcon from "../images/expired.png";


const AllWagers = () => {
  const [wagers, setWagers] = useState([]);
  const [ expiredStatus, setExpiredStatus ] = useState([false]);
  const { token } = useToken();

  const userId = token._id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/wagers/${userId}`)
      .then(response => {
        setWagers(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleExpiredIcon = expiredStatus => {
    if(expiredStatus === true) 
    {
      return <img alt="icon" src={expiredIcon} />
    }
  }

  const calculateExpiredStatus = (wager) => {
    let currentDate = new Date();
    let expirationDate = new Date(wager.expiration_date);
    if (currentDate > expirationDate) {
      return <td className={styles.tableData}>{handleExpiredIcon(true)}</td>
    }
    else {
      return <td className={styles.tableData}></td>
    }
  }


  return (
    <div className={styles.wagerContainer}>
        <div className={styles.styledTable}>
          <h2>Your Wagers</h2>
        <table>
        <thead>
            <tr>
            <th>Project Name</th>
            <th>Bid</th>
            <th>Initial Floor Price</th>
            <th>Expiration Date</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {wagers.map((wager, index) => (
            <tr key={index}>
                <td className={styles.tableData}>{wager.collec_name}</td>
                <td className={styles.tableData}>{wager.bid_velocity}</td>
                <td className={styles.tableData}>{wager.initial_floor_price}</td>
                <td className={styles.tableData}>{(new Date(wager.expiration_date)).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute: 'numeric' })}</td>
                {calculateExpiredStatus(wager)}
                <td> {handleExpiredIcon(wager.expiredStatus)} </td>
            </tr>
            ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllWagers;
