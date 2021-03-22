import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../CSS/styles.css'
import './styles.css'
import logo from '../../Resource/Logo/MCSSLogo.png';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '../' },
  { title: 'About Us', url: '../AboutUs' },
  { title: 'Other Clubs', url: '../OtherClubs' },
  { title: 'Programs', url: '../Programs' },
  { title: 'Useful Information', url: '../UsefulInformation' },
  { title: 'Academic Resources', url: '../AcademicResources' },
  { title: 'MCSS Team', url: '../MCSSTeam' },
  { title: 'Developer', url: '../Developer' },
  { title: 'Calendar', url: '../Calendar' }
];


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
            {/* <main>
              <MainFeaturedPost post={aboutUs} />
            </main> */}
            <body>
                <h1>
                  MCS Programs
                </h1>
                <h2>Mathematics and Computational Sciences offer the following programs:</h2><br></br>
                
                <div id='bioinfo'>
                  <h3>Bioinformatics</h3><br></br>
                  Bioinformatics is an interdisciplinary science that combines Biology, Computer Science, Statistics, Mathematics and Chemistry. 
                  Bioinformatics is the managing of large amounts of biological information generated from research using advanced computational methods/programs.           
                  <br></br>
                  <br></br>
                  Specialist Program requirements:<br></br>
                  <ul>
                    <li>First year courses: BIO152H5; CHM110H5, CHM120H5; CSC108H5, CSC148H5; MAT102H5, (MAT132H5, MAT134H5) / (MAT135H5, MAT136H5) / MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5</li>
                    <li>At least 60% in all 100-level computer science and mathematics courses.</li>
                    <li>a minimum Cumulative Grade Point Average (CGPA) of 2.0.</li>
                  </ul>
                </div><br></br>

                <div id='cs'>
                  <h3>Computer Science</h3><br></br>
                  Computer science is concerned in the broadest sense with the study of computation and applications of computing. 
                  Its development has been stimulated by collaborations with many areas including engineering, the physical and life sciences, mathematics and statistics and commerce.
                  <br></br>
                  <br></br>
                  Specialist Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5, CSC148H5; MAT102H5, (MAT132H5, MAT134H5)/(MAT135H5, MAT136H5) / MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5</li>
                    <li>A minimum course mark in CSC148H5 and MAT102H5 of 65</li>
                    <li>A minimum Cumulative Grade Point Average (CGPA) of 2.0</li>
                  </ul>
                  <br></br>
                  <br></br>
                  Major Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5, CSC148H5; MAT102H5, (MAT132H5,MAT134H5)/(MAT135H5, MAT136H5)/MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5</li>
                    <li>A minimum course mark in CSC148H5 and MAT102H5 of 60</li>
                    <li>A minimum Cumulative Grade Point Average (CGPA) of 2.0</li>
                  </ul>
                </div><br></br>

                <div id='infosec'>
                  <h3>Information Security</h3><br></br>
                  The Specialist in Information Security is a Computer Science program that includes courses in all the major aspects of information and computer security. 
                  We have courses giving an overview of the field, as well as in-depth courses in the systems, number theory and computation complexity aspects of computer security. 
                  <br></br>
                  <br></br>
                  Specialist Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5, CSC148H5; MAT102H5, (MAT132H5,MAT134H5) / (MAT135H5, MAT136H5)/MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5, MAT223H5/MAT240H5</li>
                    <li>A minimum course mark in CSC148H5 and MAT102H5 of 65</li>
                    <li>A minimum Cumulative Grade Point Average (CGPA) of 2.0</li>
                  </ul>
                </div><br></br>

                <div id='math'>
                  <h3>Mathematics</h3><br></br>
                  The Mathematical Sciences Specialist program at the University of Toronto Mississauga provides students 
                  with a solid foundation in the fundamental theoretical aspects of the mathematical sciences along with a broad range of techniques for applying this theory.
                  <br></br>
                  <br></br>
                  Specialist Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5, CSC148H5; MAT102H5, MAT137Y5/MAT157Y5, MAT240H5</li>
                    <li>At least 60% in MAT102H5</li>
                    <li>At least 60% in MAT137Y5/MAT157Y5</li>
                    <li>A minimum cumulative grade point average (CGPA), to be determined annually</li>
                  </ul>
                  Major Program requirements:<br></br>
                  <ul>
                    <li>First year courses: MAT102H5, (MAT132H5, MAT134H5)/(MAT135H5, MAT136H5)/MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5, MAT223H5/MAT240H5</li>
                    <li>At least 60% in MAT102H5</li>
                    <li>At least 60% in MAT134H5/MAT136H5/MAT134Y5/MAT135Y5/MAT137Y5/MAT233H5 or 50% in MAT157Y5</li>
                    <li>A minimum cumulative grade point average, to be determined annually</li>
                  </ul>
                </div><br></br>

                <div id='stat'>
                <h3>Statistics</h3>
                  Applied Statistics is offered throught the Department of Mathematical and Computational Sciences as a Specialist, a Major and a Minor.
                  <br></br>
                  <br></br>
                  Specialist Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5; MAT102H5, (MAT132H5, MAT134H5)/(MAT135H5, MAT136H5)/MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5, MAT223H5/MAT240H5</li>
                    <li>At least 60% in STA107H5 or 60% in STA256H5/STA257H5</li>
                    <li>At least 60% in MAT137Y5/MAT157Y5 or 60% in MAT134H5/MAT136H5/MAT134Y5/MAT135Y5 or 55% in MAT233H5</li>
                    <li>A minimum cumulative grade point average (CGPA), to be determined annually</li>
                  </ul>
                  Major Program requirements:<br></br>
                  <ul>
                    <li>First year courses: CSC108H5; MAT102H5, (MAT132H5,MAT134H5)/(MAT135H5, MAT136H5) / MAT134Y5/MAT135Y5/MAT137Y5/MAT157Y5, 223H5/240H5</li>
                    <li>At least 60% 60% in STA107H5 or 60% in STA256H5/STA257H5</li>
                    <li>A minimum cumulative grade point average (CGPA), to be determined annually</li>
                  </ul>
                </div><br></br>
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
                    <br></br>
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
