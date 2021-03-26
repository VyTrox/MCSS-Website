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
                        <Link id='title' variant="h5" color="inherit" onClick={()=>this.goto(post._id,home)}>
                            {post.title}
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default Post