import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Componet/header/Header';
import MainFeaturedPost from './Componet/post/MainFeaturedPost';
import FeaturedPost from './Componet/post/FeaturedPost';
import Footer from './Componet/footer/Footer';

// styles
import './CSS/styles.css'

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

const mainFeaturedPost = {
  title: 'Welcome to MCSS offcial website',
  description:
    "The Mathematical and Computational Sciences Society serves the needs of every student enrolled in a Math, Computer Science, or Statistics course..",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Post section 1',
    date: 'Feb 12',
    description:
      'This is content for post 1.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post section 2',
    date: 'Feb 12',
    description:
      'This is content for post 1.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MCSS" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <br></br>

          {/* <!-- Begin Mailchimp Signup Form --> */}
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"></link>
          {/* <style type="text/css">
            #mc_embed_signup {{background: '#fff', clear: 'left', font: '14px Helvetica, Arial, sans-serif' }}
          </style> */}
          <div id="mc_embed_signup">
            <form action="https://outlook.us1.list-manage.com/subscribe/post?u=891576a33cd5274b1d0f928cd&amp;id=63e9cf1b48" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll"></div>
                <h1>Subscribe To Our Newsletter!</h1>
                <div id='text-medium'>Sign up to receive email updates on new events, news and more.</div>
                {/* <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></input>
                </div> */}
                <br></br>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div class="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div style={{position: 'absolute', left: '-50000px'}} aria-hidden="true"><input type="text" name="b_891576a33cd5274b1d0f928cd_63e9cf1b48" tabindex="-1" value=""></input></div>
                <div class="clear">
                  <input type="submit" value="Sign up!" name="subscribe" id="mc-embedded-subscribe" class="button"></input>
                </div>
            </form>
          </div>

          {/* <!--End mc_embed_signup--> */}

        </main>
      </Container>
      <Footer title="Footer" description="A UTM CSC301 Student Project" />
    </React.Fragment>
  );
}