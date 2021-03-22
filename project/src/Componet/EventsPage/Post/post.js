import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {post.date}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default Post