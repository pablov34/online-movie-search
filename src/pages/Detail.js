import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Footer from '../components/footer';

const API_KEY="53555df3"

class Detail extends React.Component
{
    constructor(){
        super();
        this.state = { movie: {} }
    }

    //datos que llegan en la url (usando ReactRouter)
    static propTypes ={
        match: PropTypes.shape({
            params:PropTypes.object,
            isExact: PropTypes.bool,
            path:PropTypes.string,
            url: PropTypes.string
        })
    }

    //se ejecuta 1 sola vez, en el montaje, luego del renderizado inicial
    componentDidMount(){
        console.log(this.props);
        const { movieId } = this.props.match.params;
        this._fetchMovie(movieId)
    }

     _fetchMovie(movieId){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
        .then(res => res.json())
        .then(movie => {
            console.log("movie data:")
            console.log(movie)
            this.setState({movie});
        })
     }

     _goBack(){
         window.history.back();
     }

    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return(
            <div>
                <Link 
                  className='button is-info'
                  to='/'>Volver
                </Link>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <Footer></Footer>
            </div>  
        )
    }
}

export default Detail;