import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';
import Main from './Main';
import AboutUs from './Componet/AboutUs/aboutUs';
import Programs from './Componet/Programs/programs';
import UsefulInformation from './Componet/UsefulInformation/usefulInformation';
import AcademicResources from './Componet/AcademicResources/academicResources';
import OtherClubs from './Componet/OtherClubs/otherClubs';
import MCSSTeam from './Componet/MCSSTeam/mcssTeam';
import Login from './Componet/Login/login';
import Register from './Componet/Register/register';
import { checkSession} from "./actions/user";


class App extends React.Component{
  constructor(props) {
    super(props);
    checkSession(this); // sees if a user is logged in.

  }
  state = {
    currentFirstName: null,
    currentLastName: null,
    currentEmail: null,
    message: { type: "", body: "" }
  }
  render() {
    const date = new Date();
    const hrs = date.getHours();
    var greet;
    if (hrs > 5 && hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24 || hrs <=5)
        greet = 'Good Evening'
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => (<Main {...props} app={this} greet={greet}/>)}/>
            <Route exact path='/Login' render={props => (<Login {...props} app={this}/>)}/>
            <Route exact path='/Register' render={ props => (<Register {...props} app={this}/>)}/>
            <Route exact path='/AboutUs' render={props => (<AboutUs {...props} app={this} greet={greet}/>)}/>
            <Route exact path='/Programs' render={props => (<Programs {...props} app={this} greet={greet}/>)}/>
            <Route exact path='/UsefulInformation' render={props => (<UsefulInformation {...props} app={this} greet={greet}/>)}/> 
            <Route exact path='/OtherClubs' render={props => (<OtherClubs {...props} app={this} greet={greet} />)}/>
            <Route exact path='/AcademicResources' render={props => (<AcademicResources {...props} app={this} greet={greet}/>)}/> 
            <Route exact path='/MCSSTeam' render={props => (<MCSSTeam {...props} app={this} greet={greet}/>)}/>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
