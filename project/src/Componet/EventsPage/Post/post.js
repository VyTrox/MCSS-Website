import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './styles.css'

class Post extends React.Component {

    render() {
    const {post} = this.props;

        return(
            // <Paper style={{ backgroundImage: `url(${`data:image/png;base64,${new Buffer(post.image.data).toString('base64')}`})` }}>
            <Paper>
                <Grid container>
                    <Grid item xs>
                        {<img id='img' style={{ float: 'left' }} height={'250px'} src={`data:image/png;base64,${new Buffer(post.image.data).toString('base64')}`} alt={post.title} />}
                        <Typography id='title' variant="h5" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography id='description' variant="body1" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                        {/* <Typography variant="h5" color="inherit" paragraph>
                            {post.date}
                        </Typography> */}
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default Post