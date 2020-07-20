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
      .then((res) => this.setState({ layoutsList: res.data[this.props.match.params.id - 1] }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  getImage() {
    let item = String(this.state.layoutsList.imgpath);
    item = item.split(";");
    return item;
  }

  renderItems = () => {
    return (
      <div className="diorama-detail__content">
        <div className="back-link">
          <Link to="/dioramas"> Back </Link>
        </div>
        <h2 className="details-title"> {this.state.layoutsList.title} </h2>

        <PhotoGallery images={this.getImage()} />

        {this.state.layoutsList.title === "Чиркейская ГЭС" ? (
          <div className="video-frame">
            <iframe
              className="video-frame"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hcYYYt-6zYA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="ges"
            ></iframe>
          </div>
        ) : (
          ""
        )}
        {this.state.layoutsList.title === "Водопад" ? (
          <div className="video-frame">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zX2yk-HVAmM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="waterfall"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/t2tntPCXmE8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="waterfallSupport"
            ></iframe>
          </div>
        ) : (
          ""
        )}
        {/* <p className="card-text"> {this.state.layoutsList.description} </p> */}
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
