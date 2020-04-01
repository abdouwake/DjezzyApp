import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import CardStatCom from "./CardStatCom";
import Donut from "./Donuts";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import Upload from "./Upload";
import Batons from "./Batons";
import TableComments from "./TableComments";
import DatePick from "./DateTime";
import {bindActionCreators} from "redux";
import {getSummary} from "../../Actions/Principale.action";
import {getDataKpis} from "../../Actions/KPIs.action";
import {connect} from "react-redux";

const style1 = {
    backgroundColor:'#f78383',
    color:'white',
 };

const style2 = {
    backgroundColor:'#df6c6c',
    color:'white'
};

const style3 = {
    backgroundColor:'#c46565',
    color:'white'
};

const style = {
     width:'250px'
 };

const styledonut = {
    marginBottom:'40px'
};

const stylecon = {
        textAlign:'center'
};

const style_paper= {
     textAlign: 'right',
     paddingTop:'2px',
     height:'360px',
     color:'#c46565'
 };

class ComStat extends Component {


    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        return (
             <div>
                 <Grid container spacing={4} direction="row" justify="center"  alignItems="center" >
                      <CardStatCom
                         stat= {this.props.statistic_data.Concernant_concurents}
                         description="Concernant concurrents"
                         style={style1}
                     />

                     <CardStatCom
                         stat= {this.props.statistic_data.concernant_maj}
                         description="Concernant MAJ"
                         style={style2}
                     />
                     <CardStatCom
                         stat= {this.props.statistic_data.concernant_internet}
                         description="Concernant internet"
                         style={style3}
                     />

                 </Grid>

                    <br/><br/><br/>

                 <Grid container spacing={4} direction="row" justify="center"  alignItems="center" >
                        <div class="container"  >
                      <div class="row justify-content-md-center">

                          <div class="col col-lg-6" >
                              <Paper  style={style_paper} elevation={2}>
                              <h3 style={stylecon}>Evolution des commentaires</h3> <br/>
                              <Batons />
                              </Paper>
                          </div>

                          <div className="col col-lg-6" >
                              <Paper  style={style_paper} elevation={2}>
                              <h3 style={stylecon}>Polarité des commentaires</h3> <br/>
                              <Donut />
                              </Paper>
                          </div>
                      </div>
                      </div>

                     <div className="col col-lg-9" >
                         <br/><br/>
                            <Upload />
                     </div>

                     <div className="col col-lg-9" >
                         <br/><br/>
                         <DatePick />
                     </div>


                     <div className="col col-lg-9" >
                         <br/><br/>
                         <TableComments  />
                     </div>


                 </Grid>

                 <br/><br/><br/><br/>

             </div>
        )
    }
}


function mapStateToProps(state){
    return {
        statistic_data: state.Cards_stat_data,
    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            getSummary:getSummary,
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ComStat);

