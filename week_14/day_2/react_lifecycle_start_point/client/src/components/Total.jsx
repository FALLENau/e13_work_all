import React from 'react';
import PropTypes from 'prop-types';

class Total extends React.Component {

  constructor(props) {
    super(props);
    console.log("Total: constructor:");
  }

  componentWillReceiveProps(nextProps){
    console.log("Total: componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Total: shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Total: componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Total: componentDidUpdate");
  }

  componentWillMount() {
    console.log("Total: componentWillMount");
  }

  componentDidMount() {
    console.log("Total: componentDidMount");
  }

  componentWillUnmount() {
    console.log("Total: componentWillUnmount");
  }

  render() {
    console.log("Total: render")
    return (
      <p>{this.props.total}</p>
    );
  }
}

export default Total;
