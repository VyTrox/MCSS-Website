import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import MainFeaturedPost from '../post/MainFeaturedPost';
import Footer from '../footer/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '../' },
  { title: 'About Us', url: '../AboutUs' },
];

const aboutUs = {
  title: 'About MCSS',
  description:
    "Mathematical & Computational Sciences Society (MCSS) is the official society representing MCS students. We hold events for students, historically they’ve been centered around MCS topics or hobbies like game nights, coding competitions, or featuring MCS professors.\n We have a Discord server, Instagram, and inactive Facebook & Twitter which are our main forms of communication with students besides this website, the links to those can be found at the bottom of the page!",
  image: '../../Resource/Logo/MCSSLogo.png',
  imgText: 'MCSS Logo',
  linkText: 'Go back to Home',
};

class AboutUs extends React.Component {
    
    render() {

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="About Us" sections={sections} />
            <main>
              <MainFeaturedPost post={aboutUs} />
            </main>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default AboutUs;