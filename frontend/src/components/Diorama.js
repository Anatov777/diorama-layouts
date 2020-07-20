import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DioramasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutsList: [],
    };
  }

  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/api/dioramas/")
      .then((res) => this.setState({ layoutsList: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  renderItems = () => {
    const dioramas = this.state.layoutsList;

    // return dioramas.map(item => (
    //     <td className="card" key={item.id}>
    //       <div className="img-area">
    //         <Link to={"/dioramas/" + item.id}><img src={'/static/images/dioramas' + item.imgpath.split(";")[0]} className="img-list" alt="..." /></Link>
    //       </div>
    //       <div className="card-body">
    //         <h3 className="card-title">{item.title}</h3>
    //         <Link to={"/dioramas/" + item.id} className="btn-more" > Подробнее </Link>
    //       </div>
    //     </td>
    // ));

    return dioramas.map((item) => (
      <div className="card" key={item.id}>
        <div className="card__content">
          <div className="card__borders">
            <div className="img-area">
              <Link to={"/dioramas/" + item.id}>
                <img
                  src={"/static/images/dioramas" + item.imgpath.split(";")[0]}
                  className="img-list"
                  alt={item.title}
                />
              </Link>
            </div>
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <Link to={"/dioramas/" + item.id} className="btn-more">
                {" "}
                Подробнее{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div className="dioramas-block">
          <h2 id="dioramas">Мои работы</h2>
          {/* <table className="table table-hover">
            <PaginacionTabla
              itemsperpage={12}
              nocolumns={0}
              items={this.renderItems()}
              pagesspan={5}
            />
          </table> */}
        {/* </div> */}
        <div className="dioramas-list">{this.renderItems()}</div>
        </div>
      </div>
    );
  }
}
