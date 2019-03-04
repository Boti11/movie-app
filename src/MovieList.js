import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => (
     <div className="movie-list">
        {
            props.movies.map((el, i) => <MovieCard  key={i} movie={el}
                                      onDelete={ (deleted) => {
                                      props.onDelete2(deleted)
                           
                                    }}
            />)
        }
        <div className="new-movie-card">+</div>
      </div>
)

export default MovieList