import React from 'react'
import CountryDetail from './CountryDetail.jsx'

class CountrySelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event) {
    const newIndex = event.target.value
    this.setState({ selectedIndex: newIndex })
    //TODO: update current country on the CountryContainer
  }

  render() {
//
    const countryOptions = this.props.countries.map(function(country, index){
      return <option key={ country.id }> { country.name } </option>
    })

    console.log(this.props.countries);
//
    return (
      <select
        id="countries"
        value={ this.state.selectedIndex }
        onChange={ this.handleChange }
        >
        <option>Country Selector</option>
        {countryOptions}
      </select>
    )
  }
}

module.exports = CountrySelector
