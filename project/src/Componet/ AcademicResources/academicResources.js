import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import '../../CSS/styles.css'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'Home', url: '../' },
    { title: 'Academic Resources', url: '../AcademicResources' },
];

class AcademicResources extends React.Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                  <Header title="Textbook Suggestion" sections={sections} />
                  <body>

                    <h1>
                      Old Exams Repository
                    </h1>
                    <br></br>
                    <div id='old_exams'>
                      The library offical website offers old exams from all three campuses, which is accessible by login with UTORID.   
                    </div>    
                  </body>
                </Container>
                <Footer title="Footer" description="A UTM CSC301 Student Project" />
            </React.Fragment>
        );
    }
}

export default AcademicResources;

