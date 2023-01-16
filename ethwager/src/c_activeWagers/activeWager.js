import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './activeWagers.module.css';
import useToken from "../hooks/useToken";

const ActiveWagers = () => {
  const [wagers, setWagers] = useState([]);
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

  return (
    <div className={styles.wagerContainer}>
        <div className={styles.styledTable}>
        <table>
        <thead>
            <tr>
            <th>Project Name</th>
            <th>Bid</th>
            <th>Initial Floor Price</th>
            <th>Expiration Date</th>
            </tr>
        </thead>
        <tbody>
            {wagers.map((wager, index) => (
            <tr key={index}>
                <td className={styles.tableData}>{wager.collec_name}</td>
                <td className={styles.tableData}>{wager.bid_velocity}</td>
                <td className={styles.tableData}>{wager.initial_floor_price}</td>
                <td className={styles.tableData}>{wager.expiration}</td>
            </tr>
            ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActiveWagers;
