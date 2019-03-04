import React from 'react'
import Rating from './Rating'

const MovieCard = (props) => {
  
    const {
        title = '',
        year = '',
        image = 'http://www.afqh.org/wp-content/plugins/Tevolution-Directory/images/noimage-220x150.jpg',
        rating = 0
    } = props.movie
    return (
       
        <div className="movie-card">
            <div className="movie-rating"><Rating count={rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${image}')`
                }}
            />
            <div className="movie-description">{title} - {year}</div>
            <div className="movie-description">
                <button onClick={() => props.onDelete({title})}> Delete </button>
                <button onClick > Edit    </button>                   </div>
            </div>
         
    )
}

export default MovieCard