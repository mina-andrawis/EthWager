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
    return ( `${formatted} ETH`)
  }

  const formatDate = (date) => {
    return (new Date(date)).toLocaleDateString("en-US", {year: '2-digit', month: '2-digit', day: '2-digit'})
  }

  return (
    <>
      {progressData.floor_data.map((progresses,index) => (
        <div classname={styles.progressContainer}>
          <tr classname={styles.progress} key={index}>
            <td classname={styles.progress}>{formatDate(progressData.date_data[index])}</td>
          </tr>
          <tr key={index}>
            <td classname={styles.progress}>{formatEth(progressData.floor_data[index])}</td>
          </tr>
        </div>
      ))}
    </>
  );

};

export default FloorProgress;