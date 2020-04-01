import React, {Component} from "react";
import Footer from "../../footer";
import Stat_File from "./stat_file";
 import Graph_Line from "./chart_line";
import Add_row from "./Add_row";
import Parametres from "./Parametres";
import TableauKPIs from "./Tableau";
import Grid from "@material-ui/core/Grid";
import DatePickKpis from "./DatePick";
 import {bindActionCreators} from "redux";
 import {connect} from "react-redux";
import {getDataKpis, requestGetMetrique, update_check, update_from, update_to} from "../../Actions/KPIs.action";
import img from "../../../doodle.jpg";
import {withRouter} from "react-router-dom";


class KPIs extends Component {
    componentWillMount(){
        this.props.requestGetMetrique();
        this.props.getDataKpis();
        this.props.update_check(false);
        this.props.update_from();
        this.props.update_to();
    }

    validate = () =>{

    };


    onClickFrom = (date) => {
        this.props.update_from(date)
    };

    onClickTo = (date) => {
        this.props.update_to(date)
    };
    onClickCheck= () => {
        this.props.update_check(!this.props.Update_date.date_checked)
    };


    render() {

        const style = {
            backgroundColor: 'white',
            marginLeft : '150px',
            marginRight : '150px',
            backgroundImage: `url(${img})`

        };


        const style_2 = {
            marginLeft : '150px',
            marginRight : '150px',
            textAlign:"center",
        };


        const style_text = {
            paddingLeft :'150px',
            paddingTop : '30px',
            paddingBottom : '20px',
            textAlign: 'left',
            color: '#FF908E'
        };


        const style_buttons={
            marginLeft : '150px',
            marginRight : '150px',
            textAlign: 'right'
        };


        const style_but={
            paddingTop: '30px'
        };


        return (

            <div>

                <h2 style={style_text}>Informations récentes </h2>
                <div style={style} className='container-fluid'>

                    <div className="row"  style={style_2}>
                        <Stat_File
                        DAU={this.props.KPIs_Data.DAU}
                        MAU={this.props.KPIs_Data.MAU}
                        REVENUE={this.props.KPIs_Data.Revenue}
                        />
                    </div>
                    <br/><br/><br/>


                    <div className="row"  >
                        <Graph_Line
                            DAU_DATA = {this.props.KPIs_Data.DAU_DATA}
                            WAU_DATA = {this.props.KPIs_Data.WAU_DATA}
                            MAU_DATA = {this.props.KPIs_Data.MAU_DATA}
                            Labels = {this.props.KPIs_Data.Labels}
                        />
                    </div>


                    <br/> <br/> <br/>


                    <Grid container style={{marginLeft:'150px'}}>
                        <Grid item style={style_but}>
                            <Add_row/>
                        </Grid>
                        <Grid item style={style_but}>
                            <Parametres/>
                        </Grid>

                        <Grid item>
                            <DatePickKpis
                                onClickCheck={this.onClickCheck}
                                onClickTo = {this.onClickTo}
                                onClickFrom={this.onClickFrom}
                                checked={this.props.Update_date.date_checked}
                                selectedToDate={this.props.Update_date.selectedToDate}
                                selectedFromDate={this.props.Update_date.selectedFromDate}
                            />
                        </Grid>

                    </Grid>


                      <br/>  <br/> <br/>
                    <div className="row" style={style_buttons} >
                        <TableauKPIs
                            MARCHE={this.props.state_kpis.Metriques}
                         />
                    </div>
                    <br/>  <br/> <br/><br/>  <br/> <br/>
                    <Footer />
                </div>


            </div>

          )


    }
}


function mapStateToProps(state){
    return {
        state_kpis: state.metriques_outils,
        Update_date: state.Update_date,
        KPIs_Data:state.KPIs_Data
    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            update_check:update_check,
            update_from:update_from,
            update_to:update_to,
            getDataKpis:getDataKpis,
            requestGetMetrique:requestGetMetrique,
        }, dispatch)

    );
}


export default
    connect(mapStateToProps, mapDispatchToProps)(KPIs);

