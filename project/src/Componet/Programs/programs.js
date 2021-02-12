import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import '../../CSS/styles.css'
import './styles.css'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '../' },
  { title: 'Programs', url: '../Programs' },
  { title: 'About Us', url: '../AboutUs' },
];


// const aboutUs = {
//   title: 'About MCSS',
//   description:
//     "Mathematical & Computational Sciences Society (MCSS) is the official society representing MCS students. We hold events for students, historically they’ve been centered around MCS topics or hobbies like game nights, coding competitions, or featuring MCS professors.\n We have a Discord server, Instagram, and inactive Facebook & Twitter which are our main forms of communication with students besides this website, the links to those can be found at the bottom of the page!",
//   image: '../../Resource/Logo/MCSSLogo.png',
//   imgText: 'MCSS Logo',
//   linkText: 'Go back to Home',
// };

class Programs extends React.Component {
    render() {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Programs" sections={sections} />
            {/* <main>
              <MainFeaturedPost post={aboutUs} />
            </main> */}
            <body>
                <h1>Intro</h1>
                    <div id="intro"><br></br></div>
                <h1>Requirements</h1> 
                    <div id="requirements"><br></br></div>
                <h1>
                  Important Dates & Deadlines
                </h1>
                <div id='deadlines'>
                <ul>
                    <li>Application Deadlines for Type 2 and Type 3 programs:</li>
                    <table id="table1">
                        <th></th><th>Application Round 1 - Spring 2021</th> <th>Appplication Round 2 - Summer 2021</th>
                        <tr><td>Program request period on <a href="https://www.acorn.utoronto.ca/">ACORN</a></td><td>March 9 - April 30</td><td>June 7 - August 27</td></tr>
                        <tr><td>If you receive an invitation to your program on ACORN, time period for you to accept the offer</td>
                            <td>May 1 - June 2</td><td>June 8 - September 20</td></tr>
                    </table>
                    <li>Application Deadlines for Type 1 programs:</li>
                        <p>Enrol any time on <a href="https://www.acorn.utoronto.ca/">ACORN</a></p>
                    <li>MCS Program Tpyes:</li>
                    <table id="table2">
                        <th>Program Name</th><th>Level</th><th>Program Type</th>
                        <tr><td>Bioinformatics</td><td>Specialist</td><td>Type 2</td></tr>
                        <tr><td>Computer Science</td><td>Specialist</td><td>Type 3</td></tr>
                        <tr><td></td><td>Major</td><td>Type 3</td></tr>
                        <tr><td></td><td>Minor</td><td>Type 1</td></tr>
                        <tr><td>Information Security</td><td>Specialist</td><td>Type 3</td></tr>
                        <tr><td>Mathmatics</td><td>Specialist</td><td>Type 2</td></tr>
                        <tr><td></td><td>Major</td><td>Type 2</td></tr>
                        <tr><td></td><td>Minor</td><td>Type 1</td></tr>
                        <tr><td>Statistics</td><td>Specialist</td><td>Type 2</td></tr>
                        <tr><td></td><td>Major</td><td>Type 2</td></tr>
                        <tr><td></td><td>Minor</td><td>Type 1</td></tr>
                           
                    </table>
                </ul>
                <p>For more detailed information, plesae visit <a href="https://www.utm.utoronto.ca/registrar/program-guide">here.</a></p>
                </div>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default Programs;