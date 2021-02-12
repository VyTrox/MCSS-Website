import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';
import Main from './Main';
import AboutUs from './Componet/AboutUs/aboutUs';
import Programs from './Componet/Programs/programs';


class App extends React.Component{

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Main></Main>}/>
            <Route exact path='/AboutUs' render={() => <AboutUs></AboutUs>}/>
            <Route exact path='/Programs' render={() => <Programs></Programs>}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
