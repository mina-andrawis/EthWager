import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs} from "../common.js"
import useProgressTracker from '../hooks/useProgressTracker.js';

const FloorProgress = ({ wagerId }) => {
  const { setProgress,progressData } = useProgressTracker(wagerId);
  
  useEffect(() => {
    setProgress(wagerId)
  }, [wagerId]);

  return (
    <td>{progressData.floor_data}
    </td>
  );

};

export default FloorProgress;