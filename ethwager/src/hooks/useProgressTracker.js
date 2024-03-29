import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = () => {
  const [projName, setProjName] = useState('');
  const [wagerId, setWagerId] = useState('');
  const [currData, setCurrData] = useState({
    pid: '',
    curr_floor: 0,
    cur_date: 0
  });
  const [progressData, setProgressData] = useState({
    wager_id: '',
    expiration_date: new Date(),
    bidVelocity: '',
    floor_data: [],
    date_data: []
  });

  // ******************************************************************************************** //
  // Update progress associated with a wagerid with currData whenever data in currData is changed //
  // ******************************************************************************************** //
  const retrieveAndSetProgressData = useCallback((wager_id) => {
    axios.get(`http://localhost:3001/wager/${wager_id}`)
      .then(response => {
        setProjName(response.data[0].collec_name);
        setWagerId(response.data[0]._id);
        setProgressData({
          wager_id: response.data[0]._id, 
          expiration_date: response.data[0].expiration_date,
          bidVelocity: response.data[0].bid_velocity,
          floor_data: response.data[0].floor_data, 
          date_data: response.data[0].date_data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // ************************************************************************************* //
  // Retrieve current floor price from OpenSea API, only runs on change of wagerId or slug //
  // Calls setCurrData(), executing the updateProgress in useEffect                        //
  // ************************************************************************************* //
  useEffect(() => {
    const retrieveCurrentData = (slug) => {
      if (slug !== '') {
        axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
          .then(response => {
            setCurrData({
              pid: wagerId,
              curr_floor: response.data.stats.floor_price,
              curr_date: new Date()
            });
          })
      } else {
        console.log("slug is empty");
      }
    }
    retrieveCurrentData(findProjSlug(projName));
  }, [projName, wagerId]);

  // ******************************************************************************************** //
  // Update progress associated with a wagerid with currData whenever data in currData is changed //
  // ******************************************************************************************** //
  useEffect(() => {
    const updateProgress = (currData) => {
      if (currData.pid !== '') {
        axios.patch(`http://localhost:3001/update-progress`, currData)
          .then(response => {
            console.log("inside updateProgress");
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
    updateProgress(currData);
  }, [currData]);

  const addProgress = useCallback((wager_id) => {
    retrieveAndSetProgressData(wager_id);
  }, [retrieveAndSetProgressData]);

  return {
    setProgress: addProgress,
    progressData
  }
}


export default useProgressTracker;