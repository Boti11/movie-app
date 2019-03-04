import React from 'react'
import Rating from './Rating'

const RatingFilter = ({count , onChange}) => (
  <div className="rating-filter">
        <span className="rating-filter-text">RATES</span>
        <Rating count={count} 
                onChangeRating={ (newRating) => {
                                 onChange(newRating)
                                 console.log(newRating)
                                   }}  />
      </div>
)

export default RatingFilter