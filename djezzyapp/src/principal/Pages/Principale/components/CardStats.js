import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        height:'100px',
        paddingTop:'2px',
    },
}));


export default function Get_Nb_Reviews(props) {
    const classes = useStyles();
    return(
        <Grid item xs={3}  >
            <div className="hover14 column">
            <Paper  style={props.style} className={classes.paper} elevation={3}>
                <h1>{props.stat}</h1>
                <h4>{props.description}</h4>
            </Paper>
            </div>
        </Grid>

        )
}
