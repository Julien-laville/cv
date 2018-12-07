import React, {Component} from 'react'


export default class Books extends Component {
  render() {
    return (
      <div className="books category">
        <h2 className="category__title">Favorite Books</h2>
        <div className="category__content category__content__card">
        {this.props.books.map((book) => {
          return (
            <p>
              <span className="book__title">{book.title}</span> <span className="book__author">{book.author}</span>
            </p>
          )
        })}
      </div>
      </div>
      )
  }
}