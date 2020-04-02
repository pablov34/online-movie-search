import React from 'react'

const API_KEY="53555df3"

class SearchForm extends React.Component
{
    constructor()
    {
        super();
        this.state = {inputMovie:''}
    }

    _handleChange = (e) =>{
        this.setState({inputMovie:e.target.value})
    }

    _handleSubmit = (e) =>{
        e.preventDefault(); //evitar comportamiento default
       // alert(this.state.inputMovie);
       const { inputMovie } = this.state;
       fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
       .then(res => res.json())
       .then(results => {
          // console.log(results)
           const {Search = [], totalResults = "0"} = results;
           //const searchResults = Search || []  //control, si resultado es "undefined" devolver array vacio
           //o usando ecmascript destructuracion con valor por defecto Seacrh = [], totalResults = "0" VER ARRIBA

           //usando la prop (tipo funcion) que se le pasa desde componente padre
           //esa funcion recibe como parametro un objeto array
           console.log({Search, totalResults});
           this.props.onResults(Search);
       })
    }

    render()
    {
        return(
            <form onSubmit={this._handleSubmit}>
              <div className="field has-addons">
                <div className="control">
                <input 
                    className="input"
                    onChange={this._handleChange}
                    type="text" 
                    placeholder="Movie to search" />
                </div>
                <div className="control">
                <button className="button is-info">
                    Search
                </button>
                </div>
              </div>
          </form>
        )
    }
}

export default SearchForm