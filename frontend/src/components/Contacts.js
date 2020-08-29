import React from 'react';

class ContactsPage extends React.Component {
  render() {
    return (
      <div className="contacts">
        <h2>Контакты</h2>
        <div className="contacts__content">
          <div>anatanatov@mail.ru</div>
          <a href="tel:+79119543437">+79119543437</a>
        </div>
      </div>
    );
  }
}

export default ContactsPage;