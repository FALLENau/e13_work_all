import React from 'react'
import Movie from './Movie.jsx'

class MovieList extends React.Component {
  render() {

    const movieComponents = this.props.data.map(function(movie){
      return (
        <Movie key={movie.id} Director={movie.Director} Year={movie.year} Link={movie.link}> {movie.title}  ({movie.year}) <a href="{movie.link}">Show times</a></Movie>
      )
    })

    return (
      <ul>
        I'm a list!
        { movieComponents }
      </ul>
    )
  }
}

export default MovieList
