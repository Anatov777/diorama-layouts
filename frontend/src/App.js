import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Link, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import DioramasPage from "./components/Diorama";
import ContactsPage from "./components/Contacts";
import DioramaDetailPage from "./components/DioramaDetails";
import Headroom from "react-headroom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
        <button id="button"></button>

          <header id="header" className="header">
            <div className="headdiv">
              <Link
                to="/"
                exact={"true"}
                className="icon-link"
              >
                <h1>Диорамы на заказ</h1>
              </Link>
              <img
                src="/static/images/bgimages/mountains.svg"
                alt="mountains"
              />
              <div className="icons">
                <Link
                  to="/vk"
                  exact={"true"}
                  className="icon-link"
                  target="_blank"
                >
                  <img src="/static/images/icons/vk.svg" alt="vk" />
                </Link>
                <Link
                  to="/instagram"
                  exact={"true"}
                  className="icon-link"
                  target="_blank"
                >
                  <img src="/static/images/icons/inst.svg" alt="instagram" />
                </Link>
              </div>
            </div>
          </header>
          <main className="main">
            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <Route exact={true} path="/dioramas" component={DioramasPage} />
              <Route exact={true} path="/contacts" component={ContactsPage} />
            </Switch>
            <Route
              exact={true}
              path="/dioramas/:id"
              component={DioramaDetailPage}
            />
            <Route
              path="/vk"
              component={() => {
                window.location = "https://vk.com/id8360008";
                return null;
              }}
            />
            <Route
              path="/instagram"
              component={() => {
                window.location = "https://www.instagram.com/vakhnarius/?igshid=1edyys4nafp51";
                return null;
              }}
            />
          </main>
          <nav role="navigation" id="nav">
            <Headroom upTolerance={1}>
              <ul>
                <li>
                  <NavLink to="/" exact={true}>
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dioramas" exact={true}>
                    Работы
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" exact={true}>
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </Headroom>
          </nav>
          <footer className="footer">
            <div className="footer__contacts">
              <span>Связаться со мной:</span>
              <span>anatanatov@mail.ru</span>
              <a href="tel:+79119543437">+79119543437</a>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
