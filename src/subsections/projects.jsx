import React, {Component} from 'react'


export default class Projects extends Component {
  render() {
    return (
      <div className="projects category">
        <h2 className="category__title">Projects</h2>
        <div className="category__content category__content__card">
        {
          this.props.projects.map((project) => {
            return (
              <ul>
                <li>
                  <p>{project.title}</p>
                  <p>{project.desc}</p>
                  <a href={project.href}>{project.url}</a>
                </li>
              </ul>
            )
          })
        }
      </div>
      </div>
    )
  }
}