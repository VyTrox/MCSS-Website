import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import {  withStyles } from '@material-ui/core/styles';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import '../../CSS/styles.css'
import './styles.css'
import Grid from '@material-ui/core/Grid';
import {handleTitle, handleStart, handleEnd} from './submit'

const sections = [
    { title: 'Home', url: '../' },
    { title: 'About Us', url: '../AboutUs' },
    { title: 'Other Clubs', url: '../OtherClubs' },
    { title: 'Programs', url: '../Programs' },
    { title: 'Useful Information', url: '../UsefulInformation' },
    { title: 'Academic Resources', url: '../AcademicResources' },
    { title: 'MCSS Team', url: '../MCSSTeam' },
    { title: 'Developer', url: '../Developer' },
    { title: 'Calender', url: '../Calender' }
  ];



  const useStyles = makeStyles((theme) => ({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  

//   let calenderEl = document.getElementById('calender')
//   let calendar = new Calendar(calenderEl, {
//     plugins: [ dayGridPlugin],
//     initialView: 'dayGridMonth',
//     events : [
//         { title: 'event 1', start: '2021-04-01', end: '2021-04-03' },
//       ],
//     editable:'true'
//   }); 
class Calender extends React.Component {
    calendarComponentRef = React.createRef();
    constructor(props) {
      super(props)

      this.state = {title: '', start:'',end:'',
        event:[
        {
            title: 'cs',
            start: '2021-03-09',
            end:'2021-03-10'}    
      ]}
    }  
 
    // 2021-03-09
    // 2021-03-18
    // onFormSubmit(event) {
    //     const title = event.target.title.value;
    //     const start = event.target.start.value;
    //     const end = event.target.end.value;
    //     // do stuff
    //     console.log("1")
        
    //     var calendar = new FullCalendar.Calendar(calenderEl)
    //     calendar.addEvent({title: 'cs',
    //     start: '2021-03-09',
    //     end:'2021-03-18'})

    //     calendar.render();
    //   };

    

    render() {
        
        const {app,greet} = this.props;
        
        return (
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header app = {app} greet = {greet} title="Calender" sections={sections} toggleTheme={this.props.toggleTheme}/>
              
              <Grid container  >
                    
                    <TextField 
                    id="title" 
                    margin="normal" 
                    label="Title"
                    name="title" 
                    required 
                    variant="outlined"
                    value={this.state.event.title}
                    onChange={this.handleChange.bind(this)}
                     />

                    <TextField 
                    id="start" 
                    margin="normal"
                    
                    name="start" 
                    type="date"
                    required variant="outlined" 
                    value={this.state.event.start}
                    helperText="Start date"
                    onChange={this.handleChange.bind(this)}
                    />

                    <TextField 
                    id="end" 
                    margin="normal" 
                    
                    name="end" 
                    required 
                    variant="outlined" 
                    type="date"
                    value={this.state.event.end}
                    helperText="End date"
                    onChange={this.handleChange.bind(this)}
                    />

                    <IconButton
                        
                        variant="contained"
                        color="primary"
                        onClick={this.add}
                        >
                        <AddBoxIcon />
                    </IconButton>
              </Grid>
              
                    
                    
              <body>
                  <h1>
                    Calender
                  </h1>
  
                  <div id='calender'>
                  <FullCalendar
                        ref={this.calendarComponentRef}
                        plugins={[ dayGridPlugin,interactionPlugin ]}
                        events={ [...this.state.event]}
                        editable={true}
                        
                        
                        // eventAdd={function(){}}
                        // eventChange={function(){}}
                        // eventRemove={function(){}}
                        
                    />
                  </div>
              </body>
            </Container>
            <Footer title="Footer" description="A UTM CSC301 Student Project" />
          </React.Fragment>
        );
      }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    add=()=> {
        var array = this.state.event;

        array.push({title: this.state.title,
        start: this.state.start,
        end:this.state.end})
        this.setState({event: array})
    }

    }

export default withStyles(useStyles)(Calender)