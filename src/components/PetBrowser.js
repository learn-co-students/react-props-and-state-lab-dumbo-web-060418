import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render(props) {
    console.log(this.props)
    return (
      <div className="ui cards">
        {this.props.petsArray.map(pet => {
            return <Pet key={ pet.id } name={ pet.name } age={ pet.age } weight={ pet.weight } type={ pet.type } gender={ pet.gender } isAdopted={ pet.isAdopted } onAdopted= { pet.onAdopted }/>
          })}
      </div>
    )
  }
}

export default PetBrowser
