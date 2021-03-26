import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../CSS/styles.css'
import './styles.css'
import logo from '../../Resource/Logo/MCSSLogo.png';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';



const sections = [
  { title: 'Home', url: '../' },
  { title: 'Events', url: '../EventsPage' },
  { title: 'About Us', url: '../AboutUs' },
  { title: 'Other Clubs', url: '../OtherClubs' },
  { title: 'Programs', url: '../Programs' },
  { title: 'Useful Information', url: '../UsefulInformation' },
  { title: 'Academic Resources', url: '../AcademicResources' },
  { title: 'MCSS Team', url: '../MCSSTeam' },
  { title: 'Developer', url: '../Developer' },
  { title: 'Calendar', url: '../Calendar' }
];

const breadcrumbNameMap = {
  '/bio': 'Bioinformatics',
  '/bio/spec': 'Specialist',
  '/cs': 'Computer Science',
  '/cs/spec': 'Specialist',
  '/is': 'Information Security',
  '/mat': 'Mathematics',
  '/sta': 'Statistics',
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 200
  },
  lists: {
  
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

function RouterBreadcrumbs() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

 

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div className={classes.root}>
        
        <nav className={classes.lists} aria-label="mailbox folders">
          <List>
            <ListItemLink to="/bio" open={open1} onClick={() => {setOpen1((prevOpen) => !prevOpen);}} />
            <Collapse component="li" in={open1} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/bio/spec" className={classes.nested} onClick={() => {
                    document.getElementById('bioinfo').scrollIntoView({ behavior: 'smooth' });
                }}/>
              </List>
            </Collapse>
            <ListItemLink to="/cs" open={open2} onClick={() => {setOpen2((prevOpen) => !prevOpen);}} />
            <Collapse component="li" in={open2} timeout="auto" unmountOnExit>
              <List disablePadding>
              <ListItemLink to="/cs/spec" className={classes.nested} onClick={() => {
                    document.getElementById('cs').scrollIntoView({ behavior: 'smooth' });
                }}/>
              </List>
            </Collapse>
            <ListItemLink to="/is" />
            <ListItemLink to="/mat" />
            <ListItemLink to="/sta" />
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
}

class Programs extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      const {app,greet} = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
          <Header app = {app} greet = {greet} title="Programs" sections={sections} toggleTheme={this.props.toggleTheme}/>
          <div id="programs">
            <div id="breadcrumbs">
              <RouterBreadcrumbs/>
            </div>
            <div id="contents">
                <div id='bioinfo'>
                  <h1>Bioinformatics</h1><br></br>
                  Bioinformatics is an interdisciplinary science that combines Biology, Computer Science, Statistics, Mathematics and Chemistry. 
                  Bioinformatics is the managing of large amounts of biological information generated from research using advanced computational methods/programs.           
                  <h3>Specialist</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                      
                      <li>course code</li>
                    </ul>
                </div><br></br>

                <div id='cs'>
                  <h1>Computer Science</h1><br></br>
                  Computer science is concerned in the broadest sense with the study of computation and applications of computing. 
                  Its development has been stimulated by collaborations with many areas including engineering, the physical and life sciences, mathematics and statistics and commerce.
                  <h3>Specialist</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li><a href="https://student.utm.utoronto.ca/calendar/OpenCourse.pl?Course=CSC290H5">CSC290</a>:</li>
                        It is a great course for you to improve both your written 
                        and oral communication skills as a computer science student. Throughout the course you will have oppotinities to write short pieces of articles on interesting topics, participate in group presentations, even 
                        learn to construct your resume! You may thank to this course a lot when you step into the future carrer or industry. Also, this can be used to satisfy 
                        the writing requirement in CSC programs.<br></br>
                      <li><a href="https://student.utm.utoronto.ca/calendar/OpenCourse.pl?Course=LIN204H5">LIN204</a>:</li>
                        This course provide you more insight into grammatical concepts of English. You have the opportunity to build and 
                        reinforce your grammar skills. And this course does not have any prerequisites, anyone can take it! You can also take this course to satisfy 
                        the writing requirement in CSC programs.<br></br>
                    </ul>
                  <h3>Major</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                       
                    </ul>
                  <h3>Minor</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                       
                    </ul>
                </div><br></br>

                <div id='infosec'>
                  <h1>Information Security</h1><br></br>
                  The Specialist in Information Security is a Computer Science program that includes courses in all the major aspects of information and computer security. 
                  We have courses giving an overview of the field, as well as in-depth courses in the systems, number theory and computation complexity aspects of computer security. 
                  <h3>Specialist</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                    </ul>
                 
                </div><br></br>
                <div id='mat'>
                <h1>Mathematics</h1><br></br>
                The Mathematical Sciences Specialist program at the University of Toronto Mississauga provides students 
                  with a solid foundation in the fundamental theoretical aspects of the mathematical sciences along with a broad range of techniques for applying this theory.
                  <h3>Specialist</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                      
                    </ul>
                  <h3>Major</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                        
                    </ul>
                  <h3>Minor</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                        
                    </ul>
                </div><br></br>

                <div id='stat'>
                <h1>Statistics</h1><br></br>
                  Applied Statistics is offered throught the Department of Mathematical and Computational Sciences as a Specialist, a Major and a Minor.
                  <h3>Specialist</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                        
                    </ul>
                  <h3>Major</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                        
                    </ul>
                  <h3>Minor</h3>
                  <h4>Recommended Courses:</h4>
                    <ul>
                      <li>course code</li>
                        
                      <li>course code</li>
                        
                    </ul>
                </div><br></br>
            
                

            </div>
          </div>
          
            
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default Programs;
