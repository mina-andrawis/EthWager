import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

const DisplayTable = () => {
  const [floor, setFloor] = useState("");
  const [age, setAge] = useState("");

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
    <div className="styled-table">
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Floor Price</th>
          <th>Age of Project</th>
          <th>Volume (30d)</th>
          <th>Price Change (30d)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Doodles</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default DisplayTable;
