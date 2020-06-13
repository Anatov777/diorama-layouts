import React, { Component } from 'react';
import axios from "axios";

export default class DioramaDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: []
    };
  }

  refreshList = (props) => {
    axios
      .get("http://localhost:8000/api/dioramas/")
      .then(res => this.setState({ layoutsList: res.data[this.props.match.params.id-1] }))
      .catch(err => console.log(err));
  };


  componentDidMount() {
    this.refreshList();
  }

  renderItems = () => {
    const newItems = this.state.layoutsList;
    return (

      <div className="col-4">
        <div className="card">
        
          <div className="card-body">
            <h5 className="card-title">{newItems.id}</h5>
            <p className="card-text">{newItems.title}</p>
            <img src={newItems.imgpath} className="img-list" alt="..." />
          </div>
        </div>
      </div>
    )
  };

  render() {
    // console.log(props.match.params.id);
    // var a = props.match.params.id
    return (
      <div>

        <div>
          {/* {props.match.params.id} */}
          {this.renderItems()}
        </div>
        <div>
          <h1># Success</h1>
        </div>
      </div>
    );
  }
}

