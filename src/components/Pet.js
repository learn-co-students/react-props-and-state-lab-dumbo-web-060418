import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: false}
  }

  adoptPet = (e) => {
    this.setState(prevState => {
      return {value: !prevState.value}
    })
  }

  render(props) {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === 'male' ? '♂' : '♀'}
            {/*'♀' OR '♂' */}
            Name: {this.props.name}
          </a>
          <div className="meta">
            <span className="date">Type: { this.props.type }</span>
          </div>
          <div className="description">
            <p>Age; {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.state.value ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick= { this.adoptPet }>Adopt pet</button>}

        </div>
      </div>
    )
  }
}

export default Pet
