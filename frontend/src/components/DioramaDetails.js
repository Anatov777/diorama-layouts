import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DioramaDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: [],
    };
  }

  refreshList = (props) => {
    axios
      .get(
        "https://diorama-heroku-app.herokuapp.com/api/dioramas/" + this.props.match.params.id + "/"
      )
      .then((res) => this.setState({ layoutsList: res.data }))
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

  getVideo(videoName, videoLink) {
    return this.state.layoutsList.title === videoName ? (
      <div className="video-frame">
        <iframe
          className="video-frame"
          width="560"
          height="315"
          src={videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title="ges"
        ></iframe>
      </div>
    ) : (
      ""
    )
  }

  renderItems = () => {
    return (
      <div className="diorama-detail__content">
        <div className="back-link">
          <Link to="/dioramas"> Галерея </Link>
        </div>
        <h2 className="details-title"> {this.state.layoutsList.title} </h2>

        <div className="photos">
          {
            this.getImage().map((item) => (
              <a href={"/static/images/dioramas"+item} data-fancybox="gallery" className="img__link" key={item}>
                <img src={"/static/images/dioramas"+item} alt={item.split('/')[item.split('/').length - 1]} />
              </a>
            ))
          }
        </div>

        {this.getVideo("Чиркейская ГЭС", "https://www.youtube.com/embed/hcYYYt-6zYA")}
        {this.getVideo("Водопад", "https://www.youtube.com/embed/zX2yk-HVAmM")}
        {this.getVideo("Водопад", "https://www.youtube.com/embed/t2tntPCXmE8")}
        {this.getVideo("Tank", "https://www.youtube.com/embed/BJSWEreOkIU")}
        {this.getVideo("Домик", "https://www.youtube.com/embed/nsdzMW822PE")}
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
