import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

var projectSlugs = [
'cryptopunks',
'boredapeyachtclub',
'mutant-ape-yacht-club',
'otherdeed',
'azuki',
'clonex',
'proof-moonbirds',
'sandbox',
'doodles-official',
'meebits',
]

const DisplayTable = () => {
const [nfts, setNfts] = useState([]);

useEffect(() => {
  Promise.all(projectSlugs.map(slug =>
    fetch(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
    .then(response => response.json())
    )).then(responses => {
      setNfts(responses);
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
          <th></th>
          {/*<th>Price Change (30d)</th>*/}
        </tr>
      </thead>
      <tbody>
        {nfts.map(nft => (
          <tr key={nft.id}>
            <td>{nft.name}</td>
            <td>{nft.stats.floor_price} Ξ</td>
            <td>{nft.stats.market_cap} Ξ</td>
            <td>{nft.stats.total_volume} Ξ</td>
            <td><button className="selection">bid</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}

export default DisplayTable;