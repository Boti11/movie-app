import React from 'react'
import MovieCard from './MovieCard'
import LoaderHOC from './LoaderHOC'

class MovieList extends React.Component {

  render()
  {
  return (<div className="movie-list">
  {
      this.props.movies.map((el, i) => <MovieCard  key={i} movie={el}
                                onDelete={ (deleted) => {
                                this.props.onDelete2(deleted)
                     
                              }}
      />)
  }
  <div className="new-movie-card">+</div>
</div>)}

}
    

export default LoaderHOC(MovieList)