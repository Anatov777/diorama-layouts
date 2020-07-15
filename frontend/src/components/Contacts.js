import React from 'react';

class ContactsPage extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="contacts">
        <h2>Контакты</h2>
        <div className="contacts__content">
          <div>anatanatov@mail.ru</div>
          <div>+79119543437</div>
        </div>
      </div>
    );
  }
}

export default ContactsPage;