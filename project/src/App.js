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
import Developer from './Componet/Developer/developer';
import Calender from './Componet/Calender/calender';
import Post from './Componet/CreatePost/newPost';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import EventsPage from './Componet/EventsPage/eventsPage';

class App extends React.Component{
  constructor(props) {
    super(props);
    checkSession(this); // sees if a user is logged in.

  }
  state = {
    currentFirstName: null,
    currentLastName: null,
    currentEmail: null,
    check: null,
    message: { type: "", body: "" },
    theme: window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light'
  }
  toggleTheme = () =>{
    const localTheme = window.localStorage.getItem('theme');
    window.localStorage.setItem('theme', localTheme ? (localTheme === 'light' ? 'dark' : 'light') : 'dark');
    this.setState({theme: window.localStorage.getItem('theme')});
  }
  render() {
    const date = new Date();
    const hrs = date.getHours();
    var greet;
    if (hrs > 5 && hrs < 12)
        greet = ' Good Morning ';
    else if (hrs >= 12 && hrs <= 17)
        greet = ' Good Afternoon ';
    else if (hrs >= 17 && hrs <= 24 || hrs <=5)
        greet = ' Good Evening '
    const theme = createMuiTheme({
      palette: {
        type: this.state.theme,
        primary: {
          light: '#b193e7',
          main: '#8770B1',
          dark: '#665586',
          contrastText: '#fff',
        },
      }
    });
    return (
      
      <div>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>

            <Route exact path='/' render={props => (<Main {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/Login' render={props => (<Login {...props} app={this} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/Register' render={ props => (<Register {...props} app={this} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/AboutUs' render={props => (<AboutUs {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/Programs' render={props => (<Programs {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/UsefulInformation' render={props => (<UsefulInformation {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/> 
            <Route exact path='/OtherClubs' render={props => (<OtherClubs {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/AcademicResources' render={props => (<AcademicResources {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/> 
            <Route exact path='/MCSSTeam' render={props => (<MCSSTeam {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/CreatePost' render={ props => (<Post {...props} app={this} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/Developer' render={props => (<Developer {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/Calender' render={props => (<Calender {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>
            <Route exact path='/EventsPage' render={props => (<EventsPage {...props} app={this} greet={greet} toggleTheme={this.toggleTheme}/>)}/>

          </Switch>
        </BrowserRouter>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
