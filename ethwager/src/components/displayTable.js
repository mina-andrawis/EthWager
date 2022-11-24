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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json,
      })
    });
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
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
          </ul>

        </div>
      );
    }
  }
}

export default DisplayTable;
