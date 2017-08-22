import React from 'react'
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'

class CountryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      focusCountry: null
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          countries: data
        })
        console.log(data);
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      }
    );
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries} />
        <CountryDetail />
      </div>
    )
  }
}

module.exports = CountryContainer
