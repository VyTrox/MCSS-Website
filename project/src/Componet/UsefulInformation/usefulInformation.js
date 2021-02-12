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
  { title: 'Useful Information', url: '../UsefulInformation' },
];


class UsefulInformation extends React.Component {
    
    render() {

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Useful Information" sections={sections} />
            {/* <main>
              <MainFeaturedPost post={usefulinformation} />
            </main> */}
            <body>
                <h1>
                  Useful Information
                </h1>

                <img id ='logo1' src='https://cdn.pixabay.com/photo/2015/10/31/11/59/information-1015297_960_720.jpg' alt='infoLogo'>
                </img>

                <div id='useful-information'>
                  <br></br>
                  <br></br>
                  MCSS sharing all kinds of information to help your studies. Click links below!<br></br>
                  <ul>
                    <li><a href="../Programs" target="_blank">Programs information</a></li>
                    <li><a href="../AcademicResources" target="_blank">AcademicResources</a></li>
                    <li>...</li>
                  </ul>
                </div>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default UsefulInformation;