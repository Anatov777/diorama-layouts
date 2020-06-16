import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, NavLink, Link, Switch } from "react-router-dom";
import HomePage from "./components/Home"
import DioramasPage from "./components/Diorama"
import ContactsPage from "./components/Contacts"
import DioramaDetailPage from "./components/DioramaDetails";


function App() {
  let hidden = "hidden";
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper" onWheel={event => {
          if (event.nativeEvent.deltaY > 0) {
            console.log('scroll up');
          } else {
            console.log('scroll down');
            //  document.getElementById('nav').attributes.id;
            document.getElementById('nav').attributes.hidden = 'true';
            console.log(document.getElementById('nav').attributes
            )
          }
        }}>
          <header id="header" className="header">
            <div className="headdiv">
              <Link to="/" exact={true} className="logo-image"><img src="favicon.ico" /></Link>
              <h1 className="div-h1">Order diorama</h1>
              <h1 className="div-h1-2">

                <Link to="/vk" exact={true} className="icon-link">
                  <img src="/images/icons/vk.svg" alt="vk" />
                </Link>
                <Link to="/instagram" exact={true} className="icon-link">
                  <img src="/images/icons/inst.svg" alt="instagram" />
                </Link>
              </h1>
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
          {/* <nav className="navigation">
            <div className="pill-nav">
              <NavLink to="/" exact={true}>Home</NavLink>
              <NavLink to="/dioramas" exact={true}>Layouts</NavLink>
              <NavLink to="/contacts" exact={true}>Contacts</NavLink>
            </div>
          </nav> */}
          <nav role='navigation' id="nav">
            <ul>
              <li><NavLink to="/" exact={true}>Home</NavLink></li>
              <li><NavLink to="/dioramas" exact={true}>Layouts</NavLink></li>
              <li><NavLink to="/contacts" exact={true}>Contacts</NavLink></li>
            </ul>
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
