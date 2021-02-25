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
  { title: 'About Us', url: '../AboutUs' },
  { title: 'Other Clubs', url: '../OtherClubs' },
  { title: 'Programs', url: '../Programs' },
  { title: 'Useful Information', url: '../UsefulInformation' },
  { title: 'Academic Resources', url: '../AcademicResources' },
];

class AcademicResources extends React.Component {

  render() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="Academic Resources" sections={sections} />
              {/* <main>
                <MainFeaturedPost post={aboutUs} />
          
              </main> */}
              <body>

                <h1>
                  Old Exams Repository
                </h1>
                <img id ='lib' src='https://pbs.twimg.com/profile_images/933377938677932032/-5AADJUM_400x400.jpg' width="400" height="300">
                </img>
                <div id='old_exams'>
                  The library offical website offers old exams from all three campuses, which is accessible by login with UTORID.   
                </div>
                
                <li> <a href="https://login.library.utoronto.ca/index.php?url=http://exams.library.utoronto.ca/" target="_blank">Old Exams Webside</a></li>

                <h1>
                  MCS Educational Videos
                </h1>
                <img id ='video' src='https://yt3.ggpht.com/ytc/AAUvwnifRY0ygwJPzcPYJUCX8pO3vmXZp1VEEfxR8Dpa=s900-c-k-c0x00ffffff-no-rj' width="400" height="300">
                </img>
                <div id='videos'>
                  There are useful videos for first-year students to learn about Calculus and Financial Math.    
                </div>
                
                <li> <a href="https://www.utm.utoronto.ca/math-cs-stats/videos" target="_blank">MCS Educational Videos Website</a></li>
                  

                <h1>
                  Free Study Room
                </h1>
                <img id ='room' src='http://library2.utm.utoronto.ca/campus-study-space/sites/default/files/styles/xlarge/public/deerfield-2087.jpg?itok=-Zpzgj6K' width="400" height="300">
                </img>
                <div id='room'>
                  There are two kinds of study room on campus, one is public study room, one is reservation-required study room. 
                  For the public study room, students are free to use any available spot. Students need to be quite in the study room, then it is not suitable for group discussion. 
                  For the reservation-required student room, student need to book the study room for specific time duration online. It is suitable for group discussion. 
                </div>
                <div id='reservation link'>
                  Most of the building in UTM holding bookable study room, there is the link for reservation:
                </div>

                <li> <a href="https://library.utm.utoronto.ca/services/studyroom" target="_blank">Library Study Room Reservation Website</a></li>
                <li> <a href="https://library.utm.utoronto.ca/info/centres%20-%20Adaptive%20Technology%20Centre" target="_blank">Adaptive Technology Room Reservation Website</a></li>
                <li> <a href="http://library2.utm.utoronto.ca/campus-study-space/" target="_blank">List of All Available Study Space on Campus</a></li>
              </body>
            </Container>
            <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
    );
  }
}


export default AcademicResources;


