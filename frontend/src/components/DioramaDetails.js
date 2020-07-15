import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhotoGallery from "./Gallery";

export default class DioramaDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: [],
    };
  }

  refreshList = (props) => {
    axios
      .get("http://127.0.0.1:8000/api/dioramas/")
      .then((res) =>
        this.setState({ layoutsList: res.data[this.props.match.params.id - 1] })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  getImage() {
    let item = String(this.state.layoutsList.imgpath);
    console.log(this.state.layoutsList);
    return item.split(";");
  }

  renderItems = () => {
    return (
      <div className="card-body">
        <div className="back-link">
          <Link to="/dioramas"> Back </Link>
        </div>
        <h2 className="card-title"> {this.state.layoutsList.title} </h2>

        <PhotoGallery images={this.getImage()} />
        {this.state.layoutsList.title === "Чиркейская ГЭС" ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hcYYYt-6zYA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          ""
        )}
        <p className="card-text"> {this.state.layoutsList.description} </p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div> {this.renderItems()} </div>
      </div>
    );
  }
}
