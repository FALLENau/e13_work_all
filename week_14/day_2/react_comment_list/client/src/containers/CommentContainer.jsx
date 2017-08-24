import React from 'react'
import CommentList from '../components/CommentList.jsx'
import CommentForm from './CommentForm.jsx'

const sampleData = [
  { id: 1, author: "Darren Green", text: "If you forget to export in JSX, I'll kill ya"},
  { id: 2, author: "Reece Jones", text: "This be wack yo"},
  { id: 3, author: "Darren Green", text: "If you use a forget to use a key in JSX, I'll kill ya"},
  { id: 3, author: "Glen Young", text: "I would say that!"}
]

class CommentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.state = {
      data: sampleData
    }
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now()
    const newComments = this.state.data.concat([comment])
    this.setState({data: newComments})
  }

  render() {
    return (
      <div>
        Add a Comment
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <h1>Welcome to the Pain Train!</h1>
        <CommentList data={ this.state.data } />
      </div>
    )
  }
}

export default CommentContainer
