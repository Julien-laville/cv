import React, {Component} from 'react'


export default class Diplomas extends Component {
  render() {
    return (
      <div className="diplomas category">
        <h2 className="category__title">Diplomas</h2>
        <div className="category__content category__content__card">
        {
          this.props.diplomas.map((diploma) => {
            return (
              <ul>
                <li>
                  <span className="diploma__title">{diploma.title}</span> <span className="diploma__year">{diploma.year}</span>
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