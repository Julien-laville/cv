import React, {Component} from 'react'


export default class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies category">
        <h2 className="category__title">Hobbies</h2>
        <div className="category__content category__content__card">
        {
          this.props.hobbies.map((hobby) => {
            return (
              <ul>
                <li>
                  <p>{hobby}</p>
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