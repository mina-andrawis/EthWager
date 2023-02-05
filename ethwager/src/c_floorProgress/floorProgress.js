import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs} from "../common.js"
import useProgressTracker from '../hooks/useProgressTracker.js';

const FloorProgress = ({ wagerId }) => {
  const { setProgress,formData } = useProgressTracker(wagerId);
  
  useEffect(() => {
    setProgress(wagerId)
  }, [wagerId]);
  


  return (
    <td>{formData.floorArray}
    </td>
  );

};

export default FloorProgress;