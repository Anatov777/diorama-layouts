import React from 'react';
import DioramasPage from "./Diorama"


class HomePage extends React.Component {

  render() {
    return (
      <div className="home-content">
        <div className="home-content__head">
          <div className="home-content__avatar"><img src="/static/images/avatar.jpg" alt="avatar" /></div>
          <div className="home-content__title">
            <h2 className="home-content__title-text">
              Диорамщик-моделист
            </h2>
            <div className="home-content__name">Моисей Соломонович</div>
            <div className="contacts__content">
              <div>anatanatov@mail.ru</div>
              <a href="+79119543437">+79119543437</a>
            </div>
          </div>
        </div>
        <div className="home-content__text">
            Занимаюсь ландшафтным и архитектурным макетированием. Делаю на заказ диорамы, макеты и модели любых объектов. Также у меня можно заказать дизайн квартиры, помещения или улицы. Беру заказы любой сложности.
        </div>
        <div>
          <DioramasPage />
        </div>
      </div>
    );
  }
}

export default HomePage;
