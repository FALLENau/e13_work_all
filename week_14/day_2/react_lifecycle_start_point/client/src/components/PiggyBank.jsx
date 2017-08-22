import React from 'react';
import PropTypes from 'prop-types';
import Total from './Total.jsx';

class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    console.log("Piggy: constructor");
    this.state = {
      total: 0,
      showTotal: true
    };
  }

  componentWillMount() {
    console.log("Piggy: componentWillMount");
  }

  componentDidMount() {
    console.log("Piggy: componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Piggy: shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Piggy: componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Piggy: componentDidUpdate");
  }

  addToSavings() {
    this.setState((prevState) => {
      console.log("Piggy: addToSavings");
      return {total: prevState.total + 1};
    });
  }

  hideTotal() {
    this.setState((prevState) => {
      console.log("Piggy: hideTotal");
      return {showTotal: false};
    });
  }

  showTotal() {
    this.setState((prevState) => {
      console.log("Piggy: constshowTotalructor");
      return {showTotal: true};
    })
  }

  render() {
    let total = <div></div>;

    if(this.state.showTotal) {
      total = <Total total={this.state.total}></Total>;
    }
    console.log("Piggy: render");
    return (
      <div className="bank-box">
        <h1>{this.props.title}</h1>
        <p>Hello, world! I am a Piggy Bank.</p>
        {total}
        <button onClick={ () => {this.addToSavings() } }>Add Funds</button>
        <button onClick={ () => {this.hideTotal() } }> Hide Total </button>
        <button onClick={ () => {this.showTotal() } }> Show Total </button>
      </div>
    );
  }
}

PiggyBank.propTypes = {
  title: PropTypes.string.isRequired
};

export default PiggyBank;
