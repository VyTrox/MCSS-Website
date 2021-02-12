import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import '../../CSS/styles.css'
//import './styles.css'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '../' },
  { title: 'About Us', url: '../AboutUs' },
  { title: 'Programs', url: '../Programs' },
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
            <Header title="MCS Programs" sections={sections} />
            {/* <main>
              <MainFeaturedPost post={Programs} />
            </main> */}
            <body>
                <h1>
                  MCS Programs
                </h1>

                <img id ='logo' src='https://pbs.twimg.com/profile_images/768836007043137536/7eVB7xp_.jpg' alt='MCSSLogo'>
                </img>
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
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default Programs;
