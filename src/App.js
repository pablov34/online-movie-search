import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import Footer from './components/footer';

class App extends React.Component {
  
 
  render()
  {
    //const url = new URL(document.location);
   // const hasId = url.searchParams.has('id');
   /* const Page = url.searchParams.has('id')
    ? <Detail id={url.searchParams.get('id')}></Detail>
    : <Home></Home> */ 

    return (
        <div className="App">
           <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/detail/:movieId' component={Detail}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            <Footer></Footer>        
        </div>
      );
  }
}

export default App;
