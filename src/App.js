import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'

class App extends React.Component {
  //constructor(){
   // super()
    //PASADO A COMP HOME this.state = { results:[], usedSearch:false }
 // }

  /*PASADO A NUEVA COMPONENT HOME
  _handleResults = (results) =>{
    this.setState({ results, usedSearch:true })
  }

  /*PASADO A COMPONENTE MOVIESLIST
  _renderResults = () => {
    return this.state.results.map(movie => {
      return <Movie 
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}>
          </Movie>
    })
  }*/
 /* PASADO A NUEVA COMPONENT HOME
 _renderResult(){
  return this.state.results.length === 0
    ? <p>Sorry! Results not found!</p>
    : <MoviesList movies={this.state.results}></MoviesList>
 }*/
 
  render()
  {
    //const url = new URL(document.location);
   // const hasId = url.searchParams.has('id');
   /* const Page = url.searchParams.has('id')
    ? <Detail id={url.searchParams.get('id')}></Detail>
    : <Home></Home>*/

    return (
        <div className="App">
           <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/detail/:movieId' component={Detail}></Route>
              <Route component={NotFound}></Route>
            </Switch>        
        </div>
      );
  }
}

export default App;
