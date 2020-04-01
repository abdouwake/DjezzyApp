import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import {bindActionCreators} from "redux";
import {getSummary} from "../../Actions/Principale.action";
import {connect} from "react-redux";

class Donut extends Component {

    componentWillMount() {
        this.props.getSummary();
    }

    constructor(props) {
        super(props);
        const copie=this.state.series;
        copie[0]=[this.props.statistic_data.total_positifs,props.statistic_data.total_negatifs];

          this.setState({
            series:copie
        })
    }



    state = {
        options: {
            colors: ['#ff5866','#1fac74'],
            labels: ['Negatifs', 'Positifs'],
        },
        series:[]

    };


    render() {

        return (
            <div className="donut">
                <Chart options={this.state.options} series={this.state.series[0]} type="donut" width="380" />
            </div>
        );
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


export default connect(mapStateToProps, mapDispatchToProps)(Donut);
