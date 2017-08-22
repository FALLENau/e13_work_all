import React from 'react'
import Comment from './Comment.jsx'

class CommentList extends React.Component {
  render() {

    const commentComponents = this.props.data.map(function(comment){
      return (
        <Comment key={comment.id} author={comment.author}> {comment.text} </Comment>
      )
    })

    return (
      <ul>
        I'm a list!
        { commentComponents }
      </ul>
    )
  }
}

export default CommentList
