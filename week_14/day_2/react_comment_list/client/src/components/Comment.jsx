import React from 'react'

class Comment extends React.Component {


  render() {
    return (
      <li>
        <h4>Author: {this.props.author}</h4>
        { this.props.children /* children are needed for this to render */}
      </li>
    )
  }
}

export default Comment
