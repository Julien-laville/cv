import React, {Component} from 'react'

export default class Tech extends Component {
  render() {
    return (
      <div className="tech category">
        <h2 className="category__title">Technologies</h2>
        <div className="category__content category__content__card">
        <ul>
          {
            this.props.technologies.map((technology) => {
              return (
                <li>
                  <span className="tech__category">{technology.category}: </span>{technology.list.join(', ')}.
                </li>
              )
            })
          }
        </ul>
      </div>
      </div>
    )
  }
}
