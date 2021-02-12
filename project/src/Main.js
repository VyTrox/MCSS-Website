import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Componet/header/Header';
import MainFeaturedPost from './Componet/post/MainFeaturedPost';
import FeaturedPost from './Componet/post/FeaturedPost';
import Footer from './Componet/footer/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Our Events', url: '#' },
  { title: 'Programs', url: '#' },
  { title: 'Resources', url: '#' },
  { title: 'Contact', url: '#' },
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
        </main>
      </Container>
      <Footer title="Footer" description="A UTM CSC301 Student Project" />
    </React.Fragment>
  );
}