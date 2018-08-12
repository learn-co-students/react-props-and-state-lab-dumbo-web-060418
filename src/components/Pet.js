import React from 'react'

const Pet = ({ pet: { id, name, type, gender, age, weight, isAdopted }, onAdoptPet }) => {
  return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h3>{name}</h3>
          </a>
          <div className="meta">
            <span className="date">Type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">

          { isAdopted ? <button className="ui disabled button" >Already adopted</button> : <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button> }
        </div>
      </div>
    )
  }

export default Pet
