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
  { title: 'Developer', url: '../Developer' },
  { title: 'Calendar', url: '../Calendar' }
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

const mailchimp = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://utmmcss.us19.list-manage.com/subscribe/post?u=c764424eb2db9d2b40b82f5fe&amp;id=c642889e45" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">

    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c764424eb2db9d2b40b82f5fe_c642889e45" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->`

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  const {app,greet} = this.props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header app = {app} greet = {greet} title="MCSS" sections={sections} toggleTheme={this.props.toggleTheme} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <br></br>
          
          <h1>Subscribe to the MCSS Newsletter!</h1>
          <div dangerouslySetInnerHTML={{ __html: mailchimp }} />

        </main>
      </Container>
      <Footer title="Footer" description="A UTM CSC301 Student Project" />
    </React.Fragment>
  );
  }
}
export default Main;