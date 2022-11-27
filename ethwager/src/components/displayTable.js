import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

const DisplayTable = () => {
  const [floor, setFloor] = useState("");

  const url = "https://api.opensea.io/api/v1/collection/doodles-official/stats"

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        setFloor(json.stats.floor_price)
    } catch (error) {
        console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData(url);  
  }, []);

  return (
    <div>{floor}</div>
  );
};

export default DisplayTable;
