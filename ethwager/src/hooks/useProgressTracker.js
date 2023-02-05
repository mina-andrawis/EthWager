import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = () => {
    
    const [projectName, setProjectName] = useState('');
    const [progressId, setProgressId] = useState('');
    const [formData, setFormData] = useState({
      progress_id: '',
      floorArray: [],
      dateArray: []
    });

    const retrieveProgress = (wager_id) => {
        axios.get(`http://localhost:3001/progress/${wager_id}`)
        .then(response => {
          console.log("isnide retrieveProgress");
            console.log(response.data);
            setProjectName(response.data[0].collec_name);
            setProgressId(response.data[0]._id);
            setFormData({
              progress_id: response.data[0]._id, 
              floorArray: response.data[0].floor_data, 
              dateArray: response.data[0].date_data });
        })
        .catch(error => {
          console.log(error);
        });
      }

    const slug = findProjSlug("Bored Ape Yacht Club");
    const retrieveCurrentData = () => {
        axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
        .then(response => {
          console.log("inside retrieveCurrentData")
          console.log(response.data);
          setFormData({ ...formData,
            floorArray: [...formData.floorArray, response.data.stats.floor_price],
            dateArray: [...formData.dateArray, new Date().getDate()] });
        })
      }
    
    const testData = {
      _id: "63dac6c14feedb1647b7dc05",
      date_data: 123,
      floor_data: 1
    }
    const updateProgress = () => {
      axios.patch(`http://localhost:3001/update-progress`, testData)
      .then(response => {
        console.log("inside updateProgress");
        console.log(response.data);
      })
    }

    const addProgress = (wager_id) => {
      retrieveProgress(wager_id);
      retrieveCurrentData();
      updateProgress();
    }


  return {
    setProgress: addProgress,
    formData
  }
}

export default useProgressTracker;