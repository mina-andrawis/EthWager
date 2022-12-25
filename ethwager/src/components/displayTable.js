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
      console.log(responses)
      setNfts(responses);
  });
}, []);

function format( num ){
  return ( Math.floor(num * 1000)/1000 )  // slice decimal digits after the 2nd one
  .toFixed(2)  // format with two decimal places
  .substr(0,4) // get the leading four characters
  .replace(/\.$/,''); // remove trailing decimal place separator
}

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
            <td>{nft.stats.floor_price} ETH</td>
            <td>{format(nft.stats.market_cap)} ETH</td>
            <td>{format(nft.stats.total_volume)} ETH</td>
            <td><button className="selection">bid</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

}

export default DisplayTable;