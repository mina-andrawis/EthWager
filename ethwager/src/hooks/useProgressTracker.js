import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = () => {
    
    const [projName, setProjName] = useState('');
    const [expiration, setExpiration] = useState(new Date());
    const [progressId, setProgressId] = useState('');
    const [currData, setCurrData] = useState({
      pid: '',
      curr_floor: 0,
      cur_date: 0
    });
    const [progressData, setProgressData] = useState({
      progress_id: '',
      floor_data: [],
      date_data: []
    });

    var wagerId = useRef('');

    const addProgress = useCallback((wager_id) => {
      retrieveProgress(wager_id);
    }, [])

    //add progress every 24 hours
    useEffect(() => {
      const intervalId = setInterval(() => {
        addProgress(wagerId);
        window.location.reload();
      }, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
  }, [progressData.date_data, addProgress, wagerId]);

    // ********************************************************************************************** //
    // Retrieve progress data from database, takes wager_id as parameter //
    // ********************************************************************************************** //
    const retrieveProgress = (wager_id) => {
        axios.get(`http://localhost:3001/wagers/${wager_id}`)
        .then(response => {
          console.log("isnide retrieveProgress");
          wagerId = wager_id;
          setProjName(response.data[0].collec_name);
          setExpiration(response.data[0].expiration_date);
          setProgressId(response.data[0]._id);
          setProgressData({
            progress_id: response.data[0]._id, 
            floor_data: response.data[0].floor_data, 
            date_data: response.data[0].date_data });
        })
        .catch(error => {
          console.log(error);
        });
      }


      var slug = findProjSlug(projName);
      // ********************************************************************************************** //
      // Retrieve current floor price from OpenSea API, only runs on change of progressId or slug //
      // ********************************************************************************************** //
      useEffect(() => {
        const retrieveCurrentData = (slug) => {
          if (slug !== '') 
          {
            axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
            .then(response => {
              console.log("inside retrieveCurrentData")
              setCurrData({
                pid: progressId,
                curr_floor: response.data.stats.floor_price,
                curr_date: new Date()});
            })
          }
          else {
            console.log("slug is empty");
          }
        }
        retrieveCurrentData(slug);
      }, [progressId, slug]);

      // ********************************************************************************************** //
      // Update progress associated with a wagerid with currData //
      // ********************************************************************************************** //
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



     

  return {
    setProgress: addProgress,
    progressData
  }
}

export default useProgressTracker;