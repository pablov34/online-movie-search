import React from 'react'
import { Title } from '../components/Title'
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import Footer from '../components/footer';

class Home extends React.Component{
    constructor(){
        super()
        this.state = { results:[], usedSearch:false }
      }

    _handleResults = (results) =>{
        this.setState({ results, usedSearch:true })
      }

     _renderResult(){
      return this.state.results.length === 0
        ? <p>Lo siento! Resultados no encontrados!</p>
        : <MoviesList movies={this.state.results}></MoviesList>
     }
 
     
  render(){
      return(
        <div>
            <Title>Buscador de peliculas </Title>
            <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            {
              this.state.usedSearch
            ? this._renderResult()
            : <small>Use el buscador para encontrar peliculas</small>
            }
            <Footer></Footer>
        </div>
      )
  }
}

export default  Home;