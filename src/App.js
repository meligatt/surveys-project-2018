import './app.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppView from './views/app-view/';

class App extends Component{
    render(){
        return (
          <Router>
            <div className="app-container">
                <AppView />
            </div>
          </Router>
        );
    }

}

export default App;
