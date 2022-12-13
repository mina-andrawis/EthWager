import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

const DisplayTable = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=15')
      .then(response => response.json())
      .then(data => {
        setNfts(data.collections);
      });
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
        {nfts.map(nft => (
          <tr key={nft.id}>
            <td>{nft.name}</td>
            <td>{nft.stats.floor_price} Ξ</td>
            <td>{nft.stats.market_cap} Ξ</td>
            <td>{nft.stats.total_volume} Ξ</td>
            <td>{nft.stats.price_change} Ξ</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

)
}

export default DisplayTable;
