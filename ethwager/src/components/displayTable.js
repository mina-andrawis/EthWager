import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/displayTable.css"
class DisplayTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  }

  callAPI() {
    const sdk = require('api')('@opensea/v1.0#10fy4ug30l7qohm4q');

    sdk.retrievingCollectionStats({collection_slug: 'doodles-official'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
export default ProjectsTable;
