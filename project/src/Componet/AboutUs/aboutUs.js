import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

// images
import logo from '../../Resource/Logo/MCSSLogo.png';


// styles
import '../../CSS/styles.css'
import './styles.css'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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

// const aboutUs = {
//   title: 'About MCSS',
//   description:
//     "Mathematical & Computational Sciences Society (MCSS) is the official society representing MCS students. We hold events for students, historically they’ve been centered around MCS topics or hobbies like game nights, coding competitions, or featuring MCS professors.\n We have a Discord server, Instagram, and inactive Facebook & Twitter which are our main forms of communication with students besides this website, the links to those can be found at the bottom of the page!",
//   image: '../../Resource/Logo/MCSSLogo.png',
//   imgText: 'MCSS Logo',
//   linkText: 'Go back to Home',
// };

class AboutUs extends React.Component {
    
  constructor(props) {
    super(props)
  }
  render(){
  const {app,greet} = this.props;

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header app = {app} greet = {greet} title="About Us" sections={sections} toggleTheme={this.props.toggleTheme}/>
            {/* <main>
              <MainFeaturedPost post={aboutUs} />
            </main> */}
            <body>
                <h1>
                  About MCSS
                </h1>

                <img id ='logo' src={logo} alt='MCSSLogo'>
                </img>

                <div id='about-us'>
                  The Mathematical and Computational Sciences Society serves the needs of every student enrolled in a Math, Computer Science, or Statistics course.
                  <br></br>
                  <br></br>
                  The University of Toronto Mississauga Mathematical and Computational Sciences Society was established by <i>Ehsan Motamedi</i>. The society serves the needs of every student enrolled in a Math, Computer Science, or Statistics course. The purpose of our society is to:<br></br>
                  <ul>
                    <li>Officially represent the students</li>
                    <li>Promote and achieve the common interests of the students</li>
                    <li>Encourage academic, social, and career related support for the students</li>
                    <li>Maintain open lines of communication between the students and the department’s faculty and staff, as well as maintain communication between the students themselves</li>
                    <li>Encourage faculty and student interaction outside of the formal lecture, tutorial, and lab setting</li>
                  </ul>
                </div>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default AboutUs;
