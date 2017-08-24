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

    this.setFocusCountry = this.setFocusCountry.bind(this)
  }

  setFocusCountry(country) {
    this.setState({ focusCountry: country })
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          countries: data,
          focusCountry: data[0]
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
        <CountrySelector
          countries={ this.state.countries }
          selectCountry={ this.setFocusCountry }
        />
        <CountryDetail country={ this.state.focusCountry } />
      </div>
    )
  }
}

module.exports = CountryContainer
