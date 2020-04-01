import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import getImage from "./img_conc/getImg";




export default function CardConcurent({score,picture,titre,text}) {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 150
        },
    });
         const classes = useStyles();

    return(
        <div>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={getImage(picture)}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {titre}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {text}
                        </Typography>
                        <br/>
                        <Typography gutterBottom variant="h5" component="h2">
                            Satisfaction : {score} %
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Acceder à l'application
                    </Button>

                </CardActions>
            </Card>


        </div>
    )

}