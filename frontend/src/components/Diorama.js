import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class DioramasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: [],
    };
  }

  refreshList = () => {
    axios
      .get("https://diorama-heroku-app.herokuapp.com/api/dioramas/")
      .then((res) => this.setState({ layoutsList: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
    AOS.init({
      duration: 2000
    })
  }

  renderItems = () => {
    const dioramas = this.state.layoutsList;

    return dioramas.map((item) => (
      <div className="card" key={item.id}>
        <div className="card__content">
          <div className="card__image">
            <Link to={"/dioramas/" + item.id}>
              <img
                src={"/static/images/dioramas" + item.imgpath.split(";")[0]}
                className="img-list"
                alt={item.title}
              />
            </Link>
          </div>
          <div className="card__text">
            <h3 className="card-title">{item.title}</h3>
            <Link to={"/dioramas/" + item.id} className="btn-more">
              {" "}
                Подробнее{" "}
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="dioramas">
        <div className="dioramas-block" data-aos="fade-up">
          <h2 id="dioramas" data-aos="zoom-in" data-aos-duration="3000">Мои работы</h2>
          <div className="dioramas-list">{this.renderItems()}</div>
        </div>
      </div>
    );
  }
}
