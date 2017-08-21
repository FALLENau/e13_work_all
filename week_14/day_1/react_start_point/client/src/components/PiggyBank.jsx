import React from 'react'
import PropTypes from 'prop-types'

class PiggyBank extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      owner: "Reece",
      total: 0
    }
  }

  addToSavings() {
    this.setState({
      total: this.state.total + this.props.changeAmmount
    })
  }

  removeFromSavings() {
    this.setState({
      total: this.state.total - this.props.changeAmmount
    })
  }

  render() {
    return(
      <div className="bank-box">
        <h1>{this.props.title}</h1>
        <h2>{this.props.owner}</h2>
        <h2>Savings: {this.state.total}</h2>
        <button onClick={()=>{this.addToSavings()}}>Add</button>
        <button onClick={()=>{this.removeFromSavings()}}>Take</button>
      </div>
    )
  }
}

PiggyBank.propTypes = {
  title: PropTypes.string.isRequired
}

export default PiggyBank
