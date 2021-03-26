import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './styles.css'

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    goto(id,home){
        const myurl = '/posts/'+id
        home.props.history.push(myurl)
    }
    render() {
    const {app,post,home} = this.props;
        return(
            <Paper>
                <Grid container>
                    <Grid item xs>
                        {<img id='img' style={{ float: 'left' }} height={'250px'} src={`data:image/png;base64,${new Buffer(post.image.data).toString('base64')}`} alt={post.title} />}
                        <Link id='title' onClick={()=>this.goto(post._id,home)}>
                            {post.title}
                        </Link>
                        <Typography variant="subtitle2" color="textSecondary">
                            {(new Date(post.date)).toString().substring(0, 21)}
                        </Typography>
                        <Typography id='description' variant="body1" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default Post