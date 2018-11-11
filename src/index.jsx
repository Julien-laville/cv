import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import data from './cv_data'
import Books from './books.jsx'

class PageComponent extends Component {
  render() {
      return (
        <div className='app'>
          <h1>Julien Laville Web Engineer | Full Stack</h1>
          <Books books={data.favoriteBooks}/>
        </div>
      )
  }
}

ReactDOM.render(<PageComponent/>, document.getElementById('app'))
