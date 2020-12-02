import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';

function App()
{
  return (
    <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand"> React App </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> <Link to={'/'} className="nav-link">Home</Link> </li>
              <li className="nav-item"> <Link to={'/insert'} className="nav-link">Insert</Link> </li>
              <li className="nav-item"> <Link to={'/view'} className="nav-link">View</Link> </li>
            </ul>
          </div>
        </nav>

        <h2> React CRUD Implementation</h2> <br />
          
          <Switch>
            <Route exact path='/insert' component={ Insert } />
            <Route exact path='/edit/:id' component={ Edit } />
            <Route exact path='/view' component={ View } />
          </Switch>

      </div>
    </Router>
  );
}

export default App;
