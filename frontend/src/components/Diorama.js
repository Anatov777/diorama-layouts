import React, { Component } from 'react';
import axios from "axios";

// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PaginacionTabla from "./Pagination";
// import LoginPage from "./SignupLogin";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import DioramaDetailPage from "./DioramaDetails";


export default class DioramasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: []
    };
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/dioramas/")
      .then(res => this.setState({ layoutsList: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  renderItems = () => {
    const newItems = this.state.layoutsList;
    return newItems.map(item => (
      <div className="col-4">
        <div className="card">
          <div className="img-area">
            <Link to={"/dioramas/" + item.id}><img src={item.imgpath} className="img-list" alt="..." /></Link>
          </div>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            {/* <p className="card-text">{item.description}</p> */}
            <Link to={"/dioramas/" + item.id} className="btn-more" > More </Link>
          </div>
        </div>
      </div>
    ));
  };





  render() {
    return (
      <div>
        <div>
          <h2>
            Dioramas
          </h2>
          <table className="table table-hover">
            <PaginacionTabla
              itemsperpage={12}
              nocolumns={0}
              items={this.renderItems()}
              pagesspan={5}
            />
          </table>
        </div>
        <div>
          {/* <LoginPage /> */}
        </div>
      </div>
    );
  }
}
