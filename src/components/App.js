import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (props) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        type: props
      }
    }))
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch("/api/pets")
        .then(res => res.json())
        .then(json=> this.passPetsArray(json))
    } else if (this.state.filters.type === 'cat') {
      fetch("/api/pets?type=cat")
        .then(res => res.json())
        .then(json=> this.passPetsArray(json))
    } else if (this.state.filters.type === 'dog') {
      fetch("/api/pets?type=dog")
        .then(res => res.json())
        .then(json=> this.passPetsArray(json))
    } else {
      fetch("/api/pets?type=micropig")
        .then(res => res.json())
        .then(json=> this.passPetsArray(json))
    }
  }

  passPetsArray = (json) => {
    this.setState(prevState => {
      return {...prevState, pets: json}
    })
  }

  // onAdoptPet = () => {
  //   this.setState(prevState => {
  //     return {...prevState, isAdopted: true}
  //   })
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={ this.onChangeType } onFindPetsClick={ this.onFindPetsClick } filterType= { this.state.filters.type } />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = { this.onAdoptPet } petsArray={ this.state.pets }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
