import React from 'react'
import { Title } from '../components/Title'
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

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
        ? <p>Sorry! Results not found!</p>
        : <MoviesList movies={this.state.results}></MoviesList>
     }
 
     
  render(){
      return(
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            {this.state.usedSearch
            ? this._renderResult()
            : <small>Use the form to search movies</small>
            }
        </div>
      )
  }
}

export default  Home;