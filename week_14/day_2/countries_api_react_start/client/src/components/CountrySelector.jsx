import React from 'react'
import CountryDetail from './CountryDetail.jsx'

class CountrySelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    const newIndex = event.target.value
    this.setState({ selectedIndex: newIndex })
    const selectCountry = this.props.countries[newIndex]
    console.log(selectCountry);
    this.props.selectCountry(selectCountry)
  }

  render() {
//
    const countryOptions = this.props.countries.map(function(country, index){
      return <option value={ index }> { country.name } </option>
    })

    console.log(this.props.countries);
//
    return (
      <select
        id="countries"
        value={ this.state.selectedIndex }
        onChange={ this.handleChange }
        >
        {countryOptions}
      </select>
    )
  }
}

module.exports = CountrySelector
