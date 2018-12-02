import React, {Component} from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact category">
        <h2 className="category__title">Contact</h2>
        <div className="category__content category__content__card">
        {
          this.props.contacts.map(contact => (
            <p><a href={contact.url} className={contact.type + ' contact__link'}>{contact.display}</a></p>
          ))
        }
        </div>
      </div>
      )
  }
}
