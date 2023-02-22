import React, { useEffect, useState } from 'react';
import styles from './floorProgress.module.css';
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
    return (new Date(date)).toLocaleDateString("en-US", {year: '2-digit', month: '2-digit', day: '2-digit'})
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
              <span className={styles.progressDate}>
                {formatDate(progressData.date_data[index])}
              </span>
              <td style={{ height:5 }}></td>
              <span className={styles.progressEth}>
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