import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Link, Switch } from "react-router-dom";
import HomePage from "./components/Home"
import DioramasPage from "./components/Diorama"
import ContactsPage from "./components/Contacts"
import DioramaDetailPage from "./components/DioramaDetails";
import Headroom from 'react-headroom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <header id="header" className="header">
            <div className="headdiv">
              <h1>Order diorama</h1>
              <img src="/images/bgimages/mountains.svg" alt="mountains" />
              <div className="icons">
                <Link to="/vk" exact={"true"} className="icon-link" target="_blank">
                  <img src="/static/images/icons/vk.svg" alt="vk" />
                </Link>
                <Link to="/instagram" exact={"true"} className="icon-link" target="_blank">
                  <img src="/images/icons/inst.svg" alt="instagram" />
                </Link>
              </div>
            </div>

          </header>
          <main className="main">
            <Switch>
              <Route exact={true} path='/' component={HomePage} />
              <Route exact={true} path='/dioramas' component={DioramasPage} />
              <Route exact={true} path='/contacts' component={ContactsPage} />
            </Switch>
            <Route exact={true} path="/dioramas/:id" component={DioramaDetailPage} />
            <Route path='/vk' component={() => { window.location = 'https://vk.com/'; return null; }} />
            <Route path='/instagram' component={() => { window.location = 'https://instagram.com/'; return null; }} />
          </main>
          <nav role='navigation' id="nav">
            <Headroom upTolerance={1}>
              <ul>
                <li><NavLink to="/" exact={true}>Home</NavLink></li>
                <li><NavLink to="/dioramas" exact={true}>Layouts</NavLink></li>
                <li><NavLink to="/contacts" exact={true}>Contacts</NavLink></li>
              </ul>
            </Headroom>
          </nav>
          <footer className="footer">
            This is Footer<br />
            This is Footer<br />
            This is Footer
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
