import React from 'react'
import MovieList from '../components/MovieList.jsx';

const MovieHardData = [
  { id: 1, Director: "Steve Gomer", title: "All Saints", year: 2017, link: "http://www.imdb.com/showtimes/title/tt5140878/?ref_=shlc_li_tt"},
  { id: 2, Director: "George Nolfi", title: "Birth of the Dragon", year: 2016},
  { id: 3, Director: "Eric Summer", title: "Terminator 2: Judgment Day", year: 1991},
  { id: 4, Director: "Eric Summer", title: "Leap!", year: 2016},
  { id: 5, Director: "Eric Summer", title: "Leap!", year: 2016},
  { id: 6, Director: "Eric Summer", title: "Leap!", year: 2016}
]

class MovieContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: MovieHardData
    }
  }

  render() {
    return (
      <div>
        <MovieList data={ this.state.data } />
      </div>
    )
  }
}

export default MovieContainer
