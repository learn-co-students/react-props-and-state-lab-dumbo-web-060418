import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (e) => {
     this.setState({
       filters: {
         ...this.state.filters,
         type: e.target.value
       }
     })
  }

  findPetsClick = () => {
    switch (this.state.filters.type) {
      case 'all':
       fetch('/api/pets').then(res => res.json()).then(pets => {this.setState({
         pets: pets
       })})
      break;
      case 'cat':
        fetch('/api/pets?type=cat').then(res => res.json()).then(pets =>
          {this.setState({
          pets: pets
        })})
       break;
      case 'dog':
        fetch('/api/pets?type=dog').then(res => res.json()).then(pets => {this.setState({
          pets: pets
        })})
      break;
      case 'micropig':
        fetch('/api/pets?type=micropig').then(res => res.json()).then(pets => {this.setState({
          pets: pets
        })})
       break;
      default:
        fetch('/api/pets').then(res => res.json()).then(pets => {this.setState({
          pets: pets
        })})
    }
  }

   adoptPet = petId => {
   const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p;
   })
   this.setState({ pets })
   }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
               <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
