import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import placeholder from '../../Resource/Execs/placeholder.jpeg';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import '../../CSS/styles.css'
import './styles.css'

// icons
import GitHubIcon from '@material-ui/icons/GitHub';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import InstagramIcon from '@material-ui/icons/Instagram';
//import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';

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

function copy() {
    
    var copyText = document.getElementById("address");
  
    
    copyText.select();
    
  
    
    document.execCommand("copy");
  
    
    alert("Copied the text: " + copyText.value);
}

class Developer extends React.Component {
    constructor(props) {
        super(props)
    }       
    render() {
      const {app,greet} = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header app = {app} greet = {greet} title="Developer" sections={sections} toggleTheme={this.props.toggleTheme}/>
            
                <body>
                    <h1>
                    Develope Teams
                    </h1>
                    <div id='page'>
                        <div class='members'>
                            <img src={placeholder}  alt="Placeholder image" />
                            <Grid item xs={12} alignItems="center">
                                <p>Zechuan Liu</p>
                                <Link className='link' href="https://github.com/liuzechuan521" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value="zechuan.liu@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton> 
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Alex Quach</p>
                                <Link className='link' href="https://github.com/VyTrox" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value="alexruifeng.quach@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Lang Qin</p>
                                <Link className='link' href="https://github.com/qinlang3" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value=" kevinlang.qin@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Wentao Zhou</p>
                                <Link className='link' href="https://github.com/Blizzard416" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value=" wentao.zhou@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Youan Cong</p>
                                <Link className='link' href="https://github.com/congyoua" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value="y.cong@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Yichun Liu</p>
                                <Link className='link' href="https://github.com/Lethannnn" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value="yichun.liu@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} alignItems="center">
                                <img src={placeholder}  alt="Placeholder image" />
                                <p>Yiling Li</p>
                                <Link className='link' href="https://github.com/Elin10-10" >
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <GitHubIcon />
                                            </Grid>
                                            <Grid item>GitHub</Grid>
                                    </Grid>
                                </Link>
                                <input type="text" value=" yiling.li@mail.utoronto.ca" id="address" class="hide"></input> 
                                <IconButton color="primary" size="large" onClick={() => copy("address")}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                            <EmailIcon />
                                            </Grid>
                                    </Grid>
                                </IconButton>
                            </Grid>
                            
                        </div>
                    </div>
                </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>
      );
    }
  }
  
  export default Developer;