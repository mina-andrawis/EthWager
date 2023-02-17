import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = () => {
    
    const [projName, setProjName] = useState('');
    const [expiration, setExpiration] = useState(new Date());
    const [wagerId, setWagerId] = useState('');
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

    const addProgress = useCallback((wager_id) => {
      retrieveAndSetProgressData(wager_id);
    }, [])
 
    //add progress every 24 hours
    useEffect(() => {
      const intervalId = setInterval(() => {
        addProgress(wagerId);
        window.location.reload();
      }, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
  }, [addProgress, wagerId]);

    // ********************************************************************************************** //
    // Retrieve progress data from database, sets WagerId state variable and executes useEffect hooks //
    // ********************************************************************************************** //
    const retrieveAndSetProgressData = (wager_id) => {
        axios.get(`http://localhost:3001/wager/${wager_id}`)
        .then(response => {
          //console.log("isnide retrieveProgress");
          setProjName(response.data[0].collec_name);
          setExpiration(response.data[0].expiration_date);
          setWagerId(response.data[0]._id);
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
      // ************************************************************************************* //
      // Retrieve current floor price from OpenSea API, only runs on change of wagerId or slug //
      // Calls setCurrData(), executing the updateProgress in useEffect                        //
      // ************************************************************************************* //
      useEffect(() => {
        const retrieveCurrentData = (slug) => {
          if (slug !== '') 
          {
            axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
            .then(response => {
              console.log("inside retrieveCurrentData")
              setCurrData({
                pid: wagerId,
                curr_floor: response.data.stats.floor_price,
                curr_date: new Date()});
            })
          }
          else {
            console.log("slug is empty");
          }
        }
        retrieveCurrentData(slug);
      }, [slug, wagerId]);

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

    return {
      setProgress: addProgress,
      progressData
    }
}

export default useProgressTracker;