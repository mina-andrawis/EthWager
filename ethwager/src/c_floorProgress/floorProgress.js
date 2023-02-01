import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {projectNames, projectSlugs} from "../common.js"

const FloorProgress = ({ wagerId }) => {
  
  const [currentFloor, setCurrentFloor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/progress/${wagerId}`);
        setCurrentFloor(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [wagerId]);

  return (
    <div>
      <h2>Current Floor Progress:</h2>
      {currentFloor.map((floor, index) => (
        <div key={index}>
          <p>Wager Id: {floor.wager_id}</p>
          <p>Current Floor: {floor.current_floor}</p>
        </div>
      ))}
    </div>
  );
};

export default FloorProgress;