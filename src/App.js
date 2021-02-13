import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './styles/css/App.css';
import './styles/css/Sala-heros.css';
import './styles/css/lightslider.css';


import { Marvel, DC } from './recursos/recursos'
import Sala from './pages/sala';
import Main from './pages/main';



class App extends React.Component {
 links = [
    {
      url : '/dc-team', 
      urlImage : './img/DC_Comics_logo.png'
    },
    {
      url : '/marvel-team',
      urlImage : './img/marvel.png'
    }
  ]

  render() {
    return (
      <Router>
        <div className=''>
          <Switch> 
            <Route exact sensitive path="/dc-team" render={() => (<Sala  herosList={DC} className="dc-team"/>)} />
            <Route exact strict sensitive path="/marvel-team" render={() => (<Sala herosList={Marvel} className="marvel-team"/>)} />
            <Route exact path="/" render={() => (<Main links={this.links}/>)}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;
