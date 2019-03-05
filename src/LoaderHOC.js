import React, {Component} from 'react';
import './loading.css'


  
const LoaderHoc =   (WrappedComponent) =>   {
    return class LoaderHoc extends Component {
        
        render(){
            console.log(this.props.movies)
                return this.props.movies.length === 0 ? <div className='lds-dual-ring'></div>: <WrappedComponent{...this.props}/>
        } 

    }
}

export default LoaderHoc