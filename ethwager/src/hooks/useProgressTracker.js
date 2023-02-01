import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs, findProjSlug} from "../common.js"

const useProgressTracker = (wager_id) => {
    
    const [projectName, setProjectName] = useState('');
    const [progressId, setProgressId] = useState('');
    const [formData, setFormData] = useState({
      progress_id: '',
      floorArray: [],
      dateArray: []
    });

    const retrieveProgress = () => {
        axios.get(`http://localhost:3001/get-progress/${wager_id}`)
        .then(response => {
            console.log(response.data);
            setProjectName(response.data.collec_name);
            setProgressId(response.data._id);
            setFormData.floorArray(response.data.floor_data);
            setFormData.dateArray(response.data.date_data);
        })
      }
      retrieveProgress();

    const slug = findProjSlug(projectName);
    const retrieveCurrentData = () => {
        axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
        .then(response => {
          console.log(response.data);
          setFormData.floorArray(...formData ,response.data.floor_price);
          setFormData.dateArray(...formData ,new Date().getDate());
        })
      }
      retrieveCurrentData();
      

  return {

  }
}

export default useProgressTracker;