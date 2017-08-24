import React from 'react'

class CountryDetail extends React.Component {
  render(){
    if (!this.props.country) return null

    return (
      <div>
        <h3>
          Name: { this.props.country.name }
        </h3>
        <img src={ this.props.country.flag } />
        <p>Native name: { this.props.country.nativeName }</p>
        <p>Population: { this.props.country.population }</p>
      </div>
    )
  }
}

module.exports = CountryDetail
