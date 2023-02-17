import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs} from "../common.js"
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
    return (new Date(date)).toLocaleDateString("en-US", {year: '2-digit', month: '2-digit', day: '2-digit', hour:'numeric', minute: 'numeric'})
  }

  return (
    <>
    {progressData.floor_data.map((progresses,index) => (
              <tr key={index}>
                <td>{formatEth(progressData.floor_data[index])}</td>
                <td>{formatDate(progressData.date_data[index])}</td>
                
              </tr>
            ))}
    {/* <td>{progressData.floor_data}</td> */}
    </>

  );

};

export default FloorProgress;