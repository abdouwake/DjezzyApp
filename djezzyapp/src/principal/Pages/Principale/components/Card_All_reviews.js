import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import CardStats from "./CardStats";
import ImagesApp from "./ImagesApp";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getSummary} from "../../../Actions/Principale.action";
import Footer from "../../../footer";
import img from '../../../../doodle.jpg'
import KPIs_Data from "../../../Reducers/KPIs/Reducer_KPIs";
import {getDataKpis} from "../../../Actions/KPIs.action";
const style1 = {
    backgroundColor:'#FF908E',
    color:'white',
};
const style2 = {
    backgroundColor:'#BD8C9B',
    color:'white'
};
const style3 = {
    backgroundColor:'#8BC9C2',
    color:'white'
};
const style4 = {
    backgroundColor:'#F78383',
    color:'white'
};
const style5 = {
    backgroundColor:'#8BA9BC',
    color:'white'
};
const style6 = {
    backgroundColor:'#CEC194',
    color:'white'
};
const style7 = {
    backgroundColor:'#33B0C4 ',
    color:'white'
};
const style8 = {
    backgroundColor:'#F7C062 ',
    color:'white'
};

const back = {
    backgroundImage: `url(${img})`
};

class Get_Nb_Reviews extends Component {

    componentWillMount() {
        this.props.getSummary();
        this.props.getDataKpis();
    }

    render() {
        return (
            <div style={back}>
            <Grid container spacing={4} >
                <CardStats
                    stat= {this.props.statistic_data.total_commentaires}
                    description="Total des avis"
                    style={style1}
                />


                <CardStats
                    stat={this.props.statistic_data.total_avis}
                    description="Total commentaires"
                    style={style2}
                />

                <CardStats
                    stat={this.props.statistic_data.total_positifs}
                    description="Avis positifs"
                    style={style3}
                />

                <CardStats
                    stat={this.props.statistic_data.total_negatifs}
                    description="Avis négatifs"
                    style={style4}
                />

                <CardStats
                    stat={this.props.KPIs_Data.DAU}
                    description="Daily active users"
                    style={style5}
                />

                <CardStats
                    stat={this.props.KPIs_Data.MAU}
                    description="Monthly active users"
                    style={style6}
                />

                <CardStats
                    stat={this.props.KPIs_Data.daily_acquisition}
                    description="Daily acquisition"
                    style={style7}
                />

                <CardStats
                    stat={this.props.KPIs_Data.daily_engagement}
                    description="Daily engagement"
                    style={style8}
                />

                <ImagesApp />

            </Grid>
            </div>
        )
    }

    }



function mapStateToProps(state){
    return {
        statistic_data: state.Cards_stat_data,
        KPIs_Data:state.KPIs_Data

    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
           getSummary:getSummary,
            getDataKpis:getDataKpis
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Get_Nb_Reviews);










//const mapDispatchToProps = (dispatch) => ({
//    getTotalCommentaires: () => dispatch(getTotalCommentaires())
//});
