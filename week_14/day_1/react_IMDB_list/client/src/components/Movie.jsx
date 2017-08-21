import React from 'react'

class Movie extends React.Component {


  render() {
    return (
      <li>
        <h4>Director: {this.props.Director}</h4>
        { this.props.children /* children are needed for this to render */}
      </li>
    )
  }
}

export default Movie
