import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import PhotoGallery from "./Gallery"


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

  getImage() {
    let item = String(this.state.layoutsList.imgpath);
    return item.split(";");
  }

  editFirstImage() {
    let res = this.getImage()[0].split("/");
    let images = this.getImage();
    images[0] = res[2];
    return images;
  }

  renderItems = () => {
    return (
      <div className="card-body">
        <div className="back-link">
          <Link to="/dioramas">Back</Link>
        </div>
        <h2 className="card-title">{this.state.layoutsList.title}</h2>
        <img src={this.getImage()[0]} className="img-list" alt={this.state.layoutsList.title} />
        <PhotoGallery images={this.editFirstImage()} />
        <p className="card-text">{this.state.layoutsList.description}</p>
      </div>
    )
  };

  render() {
    return (
      <div>
        <div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}