import Grid from "@material-ui/core/Grid";
import React from "react";
import image1 from '../../../../images/01.png'
import image2 from '../../../../images/02.png'
import image3 from '../../../../images/03.png'
import image4 from '../../../../images/04.png'
import image5 from '../../../../images/05.png'
import image6 from '../../../../images/06.png'
import image7 from '../../../../images/07.png'
import image8 from '../../../../images/08.png'
import {makeStyles} from "@material-ui/core/styles";
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:'100px',
        paddingTop:'50px',
    },
}));


export default function Get_Nb_Reviews() {


    const style = {
        width:'200px',
        paddingLeft:'12px',

    };
    const classes = useStyles();

    return (

        <Grid container spacing={4} className={classes.paper}>
            
            <img src={image1} style={style}/>
            <img src={image2} style={style}/>
            <img src={image3} style={style}/>
            <img src={image4} style={style}/>
            <img src={image5} style={style}/>
            <img src={image6} style={style}/>
            <img src={image7} style={style}/>
            <img src={image8} style={style}/>

        </Grid>

        )
        }