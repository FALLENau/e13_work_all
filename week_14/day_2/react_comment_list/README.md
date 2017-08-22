# REACT day 2

## Learning objectives part 1
1. Be Able to add a form to a React component
2. Be able to pass callbacks between components as props
3. Know how and when to trigger a component's Render method


## .Jsx file tips
//TODO: go over notes and fill in the last bits


## Getting started
Un-zip react-comment-list.zip in the folder, then install npm decencies
```sh
npm i
```

## Make your formInput file

touch CommentForm.jsx
```sh
touch CommentForm.jsx
```

Then add into our new file:
```js
import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      text: ""
    }
  }


  render() {
    return(
      <form className="comment-form">
        <input type="text" placeholder="Your name" value={this.state.author} />
        <input type="text" placeholder="Say something..." value={this.state.text} />
        <input type="submit" value="POST" />
      </form>
    )
  }
}

export default CommentForm
```

Now in our CommentContainer.jsx
```js
render() {
  return (
    <div>
      Add a Comment
      <CommentForm />
      <h1>Welcome to the Pain Train!</h1>
      <CommentList data={ this.state.data } />
    </div>
  )
}
```

now go back to our CommentForm.jsx file and add
```js
class CommentForm extends React.Component {
//add both the "this.handleAuthorChange" and "this.handleTextChange"
  constructor(props) {
    super(props)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      author: "",
      text: ""
    }
  }
//and add below lines to CommentForm class in CommentForm.jsx, under the class constructor
  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleTextChange(event){
    this.setState({text: event.target.value})
  }
}
```
and add this after it
```js
handleSubmit(event) {
  event.preventDefault()
  const author = this.state.author.trim()
  const text = this.state.text.trim()
  if (!text || !author) {
    return
  }
  this.props.onCommentSubmit({author: author, text: text})
  this.setState({author: "", text: ""})
}
```

<br><br><br><br>

# Under the hood, How REACT works

### tips to see how React works

```js
console.log(this)//our old friend
```
## React lifecycle, Page on-load

### Constructor
will constructor the required objects and logic as required

### Component Will Mount
there is debate about if we will continue using "Component Will Mount" since the es6 update added the "Constructor" which can do any require logic on-load.

### Render
Render with look at what it needs to look though what it needs and will go and repeat the lifecycle within any other children files it needs to.

### Component Did Mount
"Component Did Mount" will give you the response received but the rendering.

#### others

##### Component Will Update
Will Update will more likely become a more of a suggestion to REACT on if it needs to render or just update what is needed

## React lifecycle, Page on-Change

### addChange
addChange will setState of requested change, which will trigger the new lifecycle.

### Should Component Update
does the setState change effect the render? we will assume that it does need render for the example.

### Component Will Update
Again Will Update will more likely become a more of a suggestion to REACT on if it needs to render or just update what is needed.

### Render
the change will then be rendered to present the new data
