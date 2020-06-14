import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, NavLink, Link, Switch } from "react-router-dom";
import HomePage from "./components/Home"
import DioramasPage from "./components/Diorama"
import ContactsPage from "./components/Contacts"
import DioramaDetailPage from "./components/DioramaDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <header id="header" className="header">
            <div className="headdiv">
              <Link to="/" exact={true}><img className="logo-image" src="favicon.ico"/></Link>
              <div>
                <h1 className="div-h1">Order diorama</h1>
              </div>
              <div>
                <h1 className="div-h1-2">Order diorama</h1>
              </div>
              
            </div>
            
          </header>
            <main className="main">
              <Switch>
                <Route exact={true} path='/' component={HomePage}/>
                <Route exact={true} path='/dioramas' component={DioramasPage}/>
                <Route exact={true} path='/contacts' component={ContactsPage}/>
              </Switch>
              <Route exact={true} path="/dioramas/:id" component={DioramaDetailPage} />

            </main>
            <nav className="navigation">
              <div className="pill-nav">
                <NavLink to="/" exact={true}>Home</NavLink>
                <NavLink to="/dioramas" exact={true}>Layouts</NavLink>
                <NavLink to="/contacts" exact={true}>Contacts</NavLink>
              </div>
            </nav>
          <footer className="footer">
            This is Footer<br/>
            This is Footer<br/>
            This is Footer
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
