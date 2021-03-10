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
import Developer from './Componet/Developer/developer';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { theme: window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light' };
  }
  toggleTheme = () =>{
    const localTheme = window.localStorage.getItem('theme');
    window.localStorage.setItem('theme', localTheme ? (localTheme === 'light' ? 'dark' : 'light') : 'dark');
    this.setState({theme: window.localStorage.getItem('theme')});
  }
  
  render() {
  
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
            <Route exact path='/' render={() => <Main toggleTheme={this.toggleTheme}></Main>}/>
            <Route exact path='/AboutUs' render={() => <AboutUs toggleTheme={this.toggleTheme}></AboutUs>}/>
            <Route exact path='/Programs' render={() => <Programs toggleTheme={this.toggleTheme}></Programs>}/>
            <Route exact path='/UsefulInformation' render={() => <UsefulInformation toggleTheme={this.toggleTheme}></UsefulInformation>}/> 
            <Route exact path='/OtherClubs' render={() => <OtherClubs toggleTheme={this.toggleTheme}></OtherClubs>}/>
            <Route exact path='/AcademicResources' render={() => <AcademicResources toggleTheme={this.toggleTheme}></AcademicResources>}/> 
            <Route exact path='/MCSSTeam' render={() => <MCSSTeam toggleTheme={this.toggleTheme}></MCSSTeam>}/>
            <Route exact path='/Developer' render={() => <Developer toggleTheme={this.toggleTheme}></Developer>}/>
          </Switch>
        </BrowserRouter>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
