import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import data from './cv_data'
import Books from './subsections/books.jsx'
import Tech from './subsections/tech.jsx'
import Experiences from './subsections/experiences.jsx'
import Diplomas from './subsections/diplomas.jsx'
import Hobbies from './subsections/hobbies.jsx'
import Projects from './subsections/projects.jsx'
import Contact from './subsections/contact.jsx'

class PageComponent extends Component {
  render() {
      return (
        <div className='app'>
          <div className="top">
            <h1 dangerouslySetInnerHTML={{__html: data.title}}/>
          </div>
          <Tech technologies={data.technologies}/>
          <Experiences experiences={data.experiences} />
          <Diplomas diplomas={data.diplomas} />
          <Books books={data.favoriteBooks}/>
          <Hobbies hobbies={data.hobbies}/>
          <Projects projects={data.projets}/>
          <Contact contacts={data.contacts}/>
          <div className="footer"/>
        </div>
      )
  }
}

ReactDOM.render(<PageComponent/>, document.getElementById('app'))
