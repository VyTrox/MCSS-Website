import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import collab from '../../Resource/Logo/collaboration-with-utm-clubs.png';
import cssc from '../../Resource/Logo/CSSC_Logo.png';
import dsc from '../../Resource/Logo/DSC_Logo.png';
import rob from '../../Resource/Logo/Robotics_Logo.png';
import sam from '../../Resource/Logo/SAM_Logo.png';
import wisc from '../../Resource/Logo/WISC_Logo.png';
import facebook from '../../Resource/Logo/facebook.png';
import twitter from '../../Resource/Logo/twitter.png';
import instagram from '../../Resource/Logo/instagram.png';
import youtube from '../../Resource/Logo/youtube.png';
import discord from '../../Resource/Logo/discord.webp';
import linkedin from '../../Resource/Logo/linkedin.webp';

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
    { title: 'MCSS Team', url: '../MCSSTeam' },
    { title: 'Developer', url: '../Developer' }
];

class OtherClubs extends React.Component {
    
    render() {

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Other Clubs" sections={sections} toggleTheme={this.props.toggleTheme}/>
            {/* <main>
              <MainFeaturedPost post={aboutUs} />
              
            </main> */}
            <body>
                <h1>
                  Other MCS Clubs
                </h1>
                <img id='collab' src={collab}  alt="Collaboration Logo" />
                <h2>Here is other friendly MCS clubs too, please take some time to support them too :)</h2>
                <div id='other-club'>
                  <table>
                    <tr>
                        <td><h1>UTM CSSC</h1><img class='clubs' src={cssc}  alt="CSSC Logo" /></td>
                        <td>
                            <p>
                                The Computer Science Student Community (CSSC) is an open space for Computer Science students to come in and ask questions about their university and post-university career.
                            </p>
                            <a class='main_page' href="https://cssc.utm.utoronto.ca/">Main Website</a>
                            <br></br>
                            <a href="https://www.facebook.com/utmcssc/">
                                <img class='icon' src={facebook} alt='facebook logo' /></a>
                            <a href="https://www.instagram.com/utm.cssc/">
                                <img class='icon' src={instagram} alt='instagram logo' /></a>
                            <a href="https://discord.gg/SHwbmVg">
                                <img class='icon' src={discord} alt='discord logo' /></a>
                        </td>
                    </tr>
                    <tr>
                        <td><h1>UTM DSC</h1><img class='clubs' src={dsc}  alt="DSC Logo" /></td>
                        <td>
                            <p>Developer Student Clubs (DSC) is a student lead community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, 
                                build solutions for their local communities, and connect with other members from the Google community.</p>
                            <a class='main_page' href="https://dscutm.com/">Main Website</a>
                            <br></br>
                            <a href="https://www.facebook.com/utmdsc">
                                <img class='icon' src={facebook} alt='facebook logo' /></a>
                            <a href="https://www.instagram.com/dscutm/">
                                <img class='icon' src={instagram} alt='instagram logo' /></a>
                            <a href="https://discord.gg/8xKTpsv">
                                <img class='icon' src={discord} alt='discord logo' /></a>
                            <a href="https://www.linkedin.com/company/dscutm/">
                                <img class='icon' src={linkedin} alt='linkedin logo' /></a>
                        </td>
                    </tr>
                    <tr>
                        <td><h1>UTM Robotics</h1><img class='clubs' src={rob}  alt="Robotics Logo" /></td>
                        <td>
                            <p>UTM Robotics Club wish to bridge the gap between these experienced students and new incoming students who are passionate about the field by creating a place of innovation for applied computer science, and promoting interest in robotics for students at UTM!</p>
                            <a class='main_page' href="https://utmrobotics.com/">Main Website</a>
                            <br></br>
                            <a href="https://www.facebook.com/utmrobotics">
                                <img class='icon' src={facebook} alt='facebook logo' /></a>
                            <a href="https://twitter.com/utmrobotics">
                                <img class='icon' src={twitter} alt='twitter logo' /></a>
                            <a href="https://www.instagram.com/accounts/login/">
                                <img class='icon' src={instagram} alt='instagram logo' /></a>
                            <a href="https://discord.gg/dGaDpAE">
                                <img class='icon' src={discord} alt='discord logo' /></a>
                        </td>
                    </tr>
                    <tr>
                        <td><h1>UTM SAM</h1><img class='clubs' src={sam}  alt="SAM Logo" /></td>
                        <td>
                            <p>A student-run club dedicated to the application of machine learning, artificial intelligence, data science, algorithm development and mathematical modelling</p>
                            <a class='main_page' href="http://utmsam.sa.utoronto.ca/">Main Website</a>
                            <br></br>
                            <a href="https://www.linkedin.com/company/utmsam2020/">
                                <img class='icon' src={linkedin} alt='linkedin logo' /></a>
                        </td>
                    </tr>
                    <tr>
                        <td><h1>UTM WISC</h1><img class='clubs' src={wisc}  alt="WISC Logo" /></td>
                        <td>
                            <p>WiSC provides a safe space for female-identifying students and minorities in the fields of science, technology, and math. 
                                We aim to foster our campus community and equip our student body with the skills needed to excel in university and beyond. </p>
                            <a class='main_page' href="https://www.wiscutm.com/">Main Website</a>
                            <br></br>
                            <a href="https://www.facebook.com/wiscutm/">
                                <img class='icon' src={facebook} alt='facebook logo' /></a>
                            <a href="https://www.youtube.com/channel/UCi-kMHU112eBEre9NviOTwg">
                                <img class='icon' src={youtube} alt='youtube logo' /></a>
                        </td>
                    </tr>
                  </table>
                </div>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default OtherClubs;