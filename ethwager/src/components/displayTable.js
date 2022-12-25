import React, { useEffect, useState } from "react";
import "../styles/displayTable.css"

var projects = {
'cryptopunks':'Crypto Punks',
'boredapeyachtclub':'Bored Ape Yacht Club',
'mutant-ape-yacht-club':'Mutant Ape Yacht Club',
'otherdeed':'Otherdeed for Otherside',
'azuki':'Azuki',
'clonex':'CLONE X - X TAKASHI MURAKAMI',
'proof-moonbirds':'Moonbirds',
'sandbox':'The Sandbox',
'doodles-official':'Doodles',
'meebits':'MeeBits',
}
const projectSlugs = Object.keys(projects);
const projectNames = Object.values(projects);

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

    var formatted = (Math.floor(num * 1000)/1000)  // slice decimal digits after the 2nd one
    .toFixed(2)  // format with two decimal places
    .substr(0,4) // get the leading four characters
    .replace(/\.$/,''); // remove trailing decimal place separator

    return ( formatted == 0.00 ? "—" : `${formatted} ETH`)
  }

  var id = 0;
  return (

    
    <div className="styled-table">
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Floor Price</th>
            <th>Market Cap</th>
            <th>Volume (30d)</th>
            {<th>Volume Delta (30d)</th>}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {nfts.map(nft => (
            <tr key={id}>
              <td>{projectNames[id++]}</td>
              <td>{format(nft.stats.floor_price)}</td>
              <td>{format(nft.stats.market_cap)}</td>
              <td>{format(nft.stats.total_volume)}</td>
              <td>{format(nft.stats.thirty_day_difference)}</td>

              <td><button className="selection">bid</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default DisplayTable;