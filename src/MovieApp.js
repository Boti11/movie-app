import React, { Component } from 'react';
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'

const laviedesautres = {title: 'la vie des autres', rating: 5, image: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/63/15/65/18708573.jpg', year: 2007}

const lapielquehabito = {
    title: 'La piel que habito',
    year: 1994,
    image: 'http://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/83/22/52/19757039.jpg',
    rating: 4
}
const amoreperros = {
  title: 'Amores perros',
  year: 2000,
  rating: 3,
  image: 'https://i2.cdscdn.com/pdt2/8/6/7/1/700x700/auc2009391715867/rw/amours-chiennes-2000-alejandro-gonzalez-inarri.jpg',
}

const victoria = {
  title: 'Victoria',
  year: 2015,
  rating: 2,
  image: 'http://www.panorama-cinema.com/V2/images/critique/critique1329/affiche1.jpg',
}

const twelveangryman = {
  title: '12 angry man',
  year: 1957,
  rating: 3,
  image: 'https://images-na.ssl-images-amazon.com/images/I/81QDf7s6rVL._SY445_.jpg',
}

const Levoyagedechihiro  = {
  title: 'Le Voyage de Chihiro ',
  year: 2001,
  rating: 4,
  image: 'http://aws-cf.ados.fr/prod/photos/2/7/1/5276271/856314/big-856314565.jpg?v=1',
}
const lala  = {
  title: ' ',
  year: 2001,
  rating: 4,
  image: "",
}

const checkDeleted = function(element1,element2) {
  for ( var i of element2){
    if (element1===i) 
       return false
    else return true 
  }
     
};

const moviesToDisplay = [laviedesautres,lapielquehabito,amoreperros,victoria,twelveangryman,Levoyagedechihiro,lala]
class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = { minimumRate : 1 ,
                  movieToDelete : [" "]}
  }
  render() { 
    return (  
    <div className="movie-body">
    <div className="movie-app">
      <header className="movie-app-header">
        <NameFilter />
        <RatingFilter 
              count ={this.state.minimumRate}
              onChange={
                (newRating)=> {
                  this.setState({minimumRate: newRating})
                }
              } />
      </header>
      <main className="movie-app-main">
          <MovieList  
                    onDelete2 ={
                      (deleted)=> {
                      
                      this.setState(state => {
                        const movieToDelete = this.state.movieToDelete.concat(deleted.title);
                        console.log(this.state.movieToDelete)
                        return{
                          movieToDelete
                        }
                      })
                     
                      }
          
                    } 
                    movies={moviesToDisplay.filter(el => (el.rating >= this.state.minimumRate && checkDeleted(el.title,this.state.movieToDelete)))}
                    
                    />
      </main>
    </div>
    </div> );
  }
}


export default MovieApp;
