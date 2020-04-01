import React ,{Component } from "react";
import Chart from 'react-apexcharts'
import {bindActionCreators} from "redux";
import {getSummary} from "../../Actions/Principale.action";
import {connect} from "react-redux";



class Batons extends Component {
    componentWillMount() {
        this.props.getSummary();
    }

    constructor(props) {
        super(props);
        const copie = this.state.series;
        copie[0].data=this.props.statistic_data.Summary_coms;
        const options=this.state.options;
        options.xaxis.categories=[2017, 2018, 2019, 2020];
        this.setState({
            series:copie,
            options:options
        })
    }


    state= {
        options: {
            colors: ['#ff5866'],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: []
            }

        },

        series:[
            {
                name: "Evolution des commentaires",
                data: []
            }
        ]

    };


    render() {

        return (


            <div>
                <div className="mixed-chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="450"
                    />
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Batons);
