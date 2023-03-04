import React, { useEffect, useState } from 'react';
import styles from './floorProgress.module.css';
import classnames from 'classnames';
import useProgressTracker from '../hooks/useProgressTracker.js';

const FloorProgress = ({ wagerId }) => {
  const { setProgress,progressData } = useProgressTracker(wagerId);
  
  useEffect(() => {
    setProgress(wagerId)
  }, [setProgress, wagerId]);


  const formatEth = (num) => {
    var formatted = (Math.floor(num * 1000)/1000).toFixed(2).substr(0,4).replace(/\.$/,'');
    return ( `${formatted}  `)
  }

  const formatDate = (date) => {
    return (new Date(date)).toLocaleDateString("en-US", {month: '2-digit', day: '2-digit'})
  }

  //determines if the current price is above or below the initial price
  const IsInTheMoney = (bidVelocity, currPrice, initialPrice) => {
    if (bidVelocity === 'bullish' && currPrice > initialPrice) {
      return true;
    } 
    else if (bidVelocity === 'bearish' && currPrice < initialPrice) {
      return true;
    }
    return false;
  }
  


  return (
    <div className={styles.allProgressContainer}>
      <div className={styles.progressContainer}>
        <tr className={styles.progress}>
          <td className={styles.progress}>
            <span className={styles.progressDate}>
              {"Date"}
            </span>
            <td style={{ height:5 }}></td>
            <span className={styles.progressEth}>
            {"Floor Price (ETH)"}
            </span>
          </td>
        </tr> 
      </div>

      {progressData.floor_data.map((progress, index) => (
        <div key={progress.wagerId} className={styles.progressContainer}>
          <tr key={`${progress.wagerId}-data`} className={styles.progress}>
            <td className={styles.progress}>
              <span className={styles.progressDate} >
                {formatDate(progressData.date_data[index])}
              </span>
              <td style={{ height:5 }}></td>
              <span className={IsInTheMoney(progressData.bidVelocity,progressData.floor_data[index],progressData.floor_data[0]) ? classnames(styles.progress, styles.aboveInital) : classnames(styles.progressEth, styles.belowInitial) } >
                {formatEth(progressData.floor_data[index])}
              </span>
            </td>
          </tr> 
        </div>
      ))}
    </div>
  );
};

export default FloorProgress;