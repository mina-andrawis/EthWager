import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

const DisplayTable = () => {
  const [floorPrice, setFloorPrice] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [volume, setVolume] = useState("");
  const [priceChange, setPriceChange] = useState("");

  const url = "https://api.opensea.io/api/v1/collection/boredapeyachtclub/stats"
  const cryptoPunksUrl = "https://api.opensea.io/api/v1/collection/cryptopunks/stats"
  
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

  const fMarketCap = parseFloat(marketCap).toFixed(2);
  const fVolume = parseFloat(volume).toFixed(0);
  const fPriceChange = parseFloat(priceChange).toFixed(2);

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
          <td>Bored Ape Yacht Club</td>
          <td>{floorPrice} Ξ</td>
          <td>{fMarketCap} Ξ</td>
          <td>{fVolume} Ξ</td>
          <td>{fPriceChange} Ξ</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default DisplayTable;
