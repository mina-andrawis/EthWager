import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = () => {
    
    const [projName, setProjName] = useState('');
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

    const retrieveProgress = (wager_id) => {
        axios.get(`http://localhost:3001/progress/${wager_id}`)
        .then(response => {
          console.log("isnide retrieveProgress");
          setProjName(response.data[0].collec_name);
            setProgressId(response.data[0]._id);
            setProgressData({
              progress_id: response.data[0]._id, 
              floor_data: response.data[0].floor_data, 
              date_data: response.data[0].date_data });
        })
        .then(() => {
          
        })
        .catch(error => {
          console.log(error);
        });
      }

      var slug = findProjSlug(projName);
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



    

    const addProgress = (wager_id) => {
      retrieveProgress(wager_id);
    }


  return {
    setProgress: addProgress,
    progressData
  }
}

export default useProgressTracker;