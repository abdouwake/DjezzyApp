
import React, {Component} from "react";
import Footer from "../../footer";
import CardStat from "./CardStat";
import Grid from "@material-ui/core/Grid";

class Stat_File extends Component {


    render(){
        const style1 = {
            backgroundColor:'#f78383',
            color:'white',
        };

        return(
            <Grid container spacing={4} direction="row" justify="center"  alignItems="center" >

                <CardStat
                    stat= {this.props.DAU}
                    description="Daily active user"
                    style={style1}
                />

                <CardStat
                    stat= {this.props.MAU}
                    description="Monthly active user"
                    style={style1}
                />

                <CardStat
                    stat= {this.props.REVENUE}
                    description="Revenue"
                    style={style1}
                />

            </Grid>
        )
    }
}


export default Stat_File;


