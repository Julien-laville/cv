import React, {Component} from 'react'


export default class Books extends Component {
  render() {
    return    <div>
      <h3>Favorite Books</h3>
      {this.props.books.map((book) => {
        return (
          <div>
            {book.name}
            {book.author}
          </div>
        )
      })}
    </div>
  }
}