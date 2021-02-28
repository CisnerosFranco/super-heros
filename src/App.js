import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './styles/css/App.css';
import './styles/css/Sala-heros.css';
import './styles/css/lightslider.css';


//import { Marvel, DC } from './recursos/recursos'
import Sala from './pages/sala';
import Main from './pages/main';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links : [
        {
          url : '/dc-team', 
          urlImage : './img/DC_Comics_logo.png'
        },
        {
          url : '/marvel-team',
          urlImage : './img/marvel.png'
        }
      ],
      marvelTeam: '',
      dcTeam : ''
    
    }
  }

  async componentDidMount() {
    const dataDC = await (await fetch('https://super-heros-api.herokuapp.com/get-team?team=dc-team')).json();
    const dataMarvel = await (await fetch('https://super-heros-api.herokuapp.com/get-team?team=marvel-team')).json();
    this.setState({
      marvelTeam : dataMarvel,
      dcTeam : dataDC
    })
  }
  

  render() {
    return (
      <Router>
        <div className=''>
          <Switch> 
            <Route exact sensitive path="/dc-team" render={() => (<Sala  herosList={this.state.dcTeam} className="dc-team"/>)} />
            <Route exact strict sensitive path="/marvel-team" render={() => (<Sala herosList={this.state.marvelTeam} className="marvel-team"/>)} />
            <Route exact path="/" render={() => (<Main links={this.state.links}/>)}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;

/*
   NOTAS
  ------
BrowserRouter no es Compatible con GitHub Pages.
por lo que hay que usar HashRouter en su lugar


*/



