import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import "../styles/displayTable.css"

class DisplayTable extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch('https://api.opensea.io/api/v1/collection/doodles-official/stats', options)
      .then(response => response.json())
      .then(response => console.log(response))
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json,
      })
    })
    .catch(err => console.error(err));

  }

render() {

  var  {isLoaded, items} = this.state;

  if (!isLoaded){
    return <div>Loading...</div>;
  }
  else {
      return (
        <div className="DisplayTable">
          <ul>
            {(items || []).map(item => (
            <li key={item.id}>
              Name: {item.count}
            </li>
          ))}
          </ul>

        </div>
      );
    }
  }
}

export default DisplayTable;
