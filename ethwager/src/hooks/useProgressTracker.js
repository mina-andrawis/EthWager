import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, getProjSlug} from "../common.js"

const useProgressTracker = (wager_id) => {
    
    const [projectName, setProjectName] = useState('');
    const [floorArray, setFloorArray] = useState([]);
    const [dateArray, setDateArray] = useState([]);

    const retrieveProgress = () => {
        axios.get(`http://localhost:3001/get-progress/${wager_id}`)
        .then(response => {
            console.log(response.data);
            setProjectName(response.data.collec_name);
            setFloorArray(response.data.floor_data);
            setDateArray(response.data.date_data);
        })
      }
      retrieveProgress();

    const slug = getProjSlug(projectName);
    const retrieveCurrentData = () => {
        axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
        .then(response => {
            console.log(response.data);
            
        })
      }
      retrieveCurrentData();

  return {

  }
}

export default useProgressTracker;