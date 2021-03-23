import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './styles.css'

class Post extends React.Component {

    render() {
    const {post} = this.props;

        return(
            <Paper style={{ backgroundImage: `url(${post.image})` }}>
                {<img style={{ display: 'none' }} src={post.image} alt='event_image' />}
                <div/>
                <Grid container>
                    <Grid item md={6}>
                        <div>
                            <Typography id='title' variant="h5" color="inherit" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography id='description' variant="body1" color="inherit" paragraph>
                                {post.description}
                            </Typography>
                            <img src={`data:image/png;base64,${post.image.data.toString('base64')}`}/>
                            {/* <Typography variant="h5" color="inherit" paragraph>
                                {post.date}
                            </Typography> */}
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default Post