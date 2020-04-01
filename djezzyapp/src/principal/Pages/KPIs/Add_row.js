import React from 'react';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {add_data_kpis, requestGetMetrique, update_date_add_row} from "../../Actions/KPIs.action";

import Formulaire from "./Form";



class Add_row extends React.Component{

componentDidMount() {
    this.props.requestGetMetrique()
}

    state={
        open:false
    };

    onClickDate=(date)=>{
        this.props.update_date_add_row(date);
    };


    handleClickOpen = () => {
        this.setState({
            open: true
        })};

    handleClose = () => {
        this.setState({
            open: false
        })};

    Submit = (event) => {
        this.props.add_data_kpis(event.target.valueOf());
        this.handleClose()

    };

    render(){

        const style={
            backgroundColor:"#FF908E",
            marginRight:'30px',
            fontsize:'18px',
            color:"white"
        };

        return (
            <div>
                <Button onClick={this.handleClickOpen}
                        style={style}
                        variant="contained"
                        color="default"
                        className={style}
                >
                    Ajouter une ligne
                </Button>


                <div>
                      <Formulaire
                        open = {this.state.open}
                        Date={this.props.state_kpis.Date}
                        onClickDate={this.props.update_date_add_row}
                        Metriques={this.props.state_kpis.Metriques}
                        handleClose ={this.handleClose}
                        add_data_kpis={this.props.add_data_kpis}
                     />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        state_kpis: state.metriques_outils,

    }
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            requestGetMetrique:requestGetMetrique,
            add_data_kpis:add_data_kpis,
            update_date_add_row:update_date_add_row,
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Add_row);

