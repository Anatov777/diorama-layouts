import React from 'react';
import axios from "axios";
import PaginacionTabla from "./Pagination";
import { Link } from "react-router-dom";



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
        <td className="card" key={item.id}>
          <div className="img-area">
            <Link to={"/dioramas/" + item.id}><img src={item.imgpath.split(";")[0]} className="img-list" alt="..." /></Link>
          </div>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <Link to={"/dioramas/" + item.id} className="btn-more" > More </Link>
          </div>
        </td>
    ));
  };

  render() {
    return (
      <div>
        <div>
          <h2 id="dioramas">
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
