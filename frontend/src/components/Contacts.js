import React from 'react';

class ContactsPage extends React.Component {
  render() {
    return (
      <div className="contacts">
        <h2>Контакты</h2>
        <div className="contacts__content">
          <div className="contacts__email">anatanatov@mail.ru</div>
          <div className="contacts__phone">
            <a href="tel:+79119543437">+79119543437</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsPage;