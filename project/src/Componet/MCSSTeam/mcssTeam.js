import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import placeholder from '../../Resource/Execs/placeholder.jpeg';

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
  { title: 'Developer', url: '../Developer' },
  { title: 'Calendar', url: '../Calendar' },
  { title: 'Events', url: '../EventsPage' }
];

class MCSSTeam extends React.Component {
    
  constructor(props) {
    super(props)
  }
  render(){
  const {app,greet} = this.props;

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header app = {app} greet = {greet} title="MCSS Tean" sections={sections} toggleTheme={this.props.toggleTheme}/>
            {/* <main>
              <MainFeaturedPost post={aboutUs} />
              
            </main> */}
            <body>
                <h1>
                  Our Teams
                </h1>
                <div id='page'>
                    <h2>Exec Team</h2>
                    <div class='President'>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p class="job">President</p>
                        <p>Brian (Zhengyu) Li</p>
                    </div>
                    <div class='Vice'>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p class="job">Vice President of External Affairs</p>
                        <p>Rutwa Engineer</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p class="job">Vice President of Internal Affairs</p>
                        <p>Tanvi Bhandari</p>
                    </div>
                    <div class='Treasurer'>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p class="job">Treasurer</p>
                        <p>Nina Ricci Lu</p>
                    </div>
                    <div class='Marketing'>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p class="job">Marketing Director</p>
                        <p>Hillary Tang</p>
                    </div>
                    <h2>Associates Team</h2>
                    <div class='Associates '>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Jagdev Jhajj</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Lena Mohammad</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Manushree Saboo</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Maryam Gohargani</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Niral Patel</p>
                        <img src={placeholder}  alt="Placeholder image" />
                        <p>Sherman Liu</p>
                    </div>
                </div>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default MCSSTeam;