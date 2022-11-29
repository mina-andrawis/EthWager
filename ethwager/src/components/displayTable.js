import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

const DisplayTable = () => {
  const [floorPrice, setFloorPrice] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [volume, setVolume] = useState("");
  const [priceChange, setPriceChange] = useState("");



  const url = "https://api.opensea.io/api/v1/collection/doodles-official/stats"

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        setFloorPrice(json.stats.floor_price)
        setMarketCap(json.stats.market_cap)
        setVolume(json.stats.total_volume)
        setPriceChange(json.stats.thirty_day_difference)
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
          <th>Market Cap</th>
          <th>Volume (30d)</th>
          <th>Price Change (30d)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Doodles</td>
          <td>{floorPrice} eth</td>
          <td>{marketCap} eth</td>
          <td>{volume} eth</td>
          <td>{priceChange} eth</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default DisplayTable;
