import React from 'react';
import DioramasPage from "./Diorama"


class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="home-content">
        <div className="home-content__head">
          <div><img src="/static/images/baby.jpg" alt="avatar" /></div>
          <div className="home-content__title">
            <h2 className="home-content__title-text">
              Диорамщик-моделист
            </h2>
            <div className="home-content__name">Моисей Соломонович</div>
            <div className="contacts__content">
              <div>anatanatov@mail.ru</div>
              <div>+79119543437</div>
            </div>
          </div>
        </div>
        <div className="home-content__text">
            Занимаюсь созданием различных диорам, макетов и моделей. Делаю работы на заказ.
        </div>
        <div>
          <DioramasPage />
        </div>
      </div>
    );
  }
}

export default HomePage;
