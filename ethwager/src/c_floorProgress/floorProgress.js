import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs} from "../common.js"
import useProgressTracker from '../hooks/useProgressTracker.js';

const FloorProgress = ({ wagerId }) => {
  const { retrieveProgress } = useProgressTracker(wagerId);
  
  <useProgressTracker wagerId={wagerId} />

  return (
    <td>{retrieveProgress}</td>
  );

};

export default FloorProgress;