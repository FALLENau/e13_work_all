import React from 'react'
import CommentList from '../components/CommentList.jsx';

const sampleData = [
  { id: 1, author: "Darren Green", text: "If you use a forEach in JSX, I'll kill ya"},
  { id: 2, author: "Reece Jones", text: "This be wack yo"},
  { id: 3, author: "Darren Green", text: "If you use a forget to use a key in JSX, I'll kill ya"}
]

class CommentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: sampleData
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Pain Train!</h1>
        <CommentList data={ this.state.data } />
      </div>
    )
  }
}

export default CommentContainer
