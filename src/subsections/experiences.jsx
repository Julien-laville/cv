import React, {Component} from 'react'


export default class Experiences extends Component {
  render() {
    return (
      <div className="experiences category">
        <h2 className="category__title">Experience</h2>
        <div className="category__content">
          <ul>
            {
              this.props.experiences.map((experience) => {
                return (
                  <li className="experience">
                    <h3 className="experience__position">{experience.position}</h3>
                    <h4>
                      <span className="experience__company">{experience.company}</span> <span className="experience__dates">From {experience.dates.from} to {experience.dates.to}</span>
                    </h4>
                    <p>{experience.achievement.join(', ')}</p>
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