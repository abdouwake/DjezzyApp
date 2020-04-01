import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Camember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                colors: ['#ff5866','#1fac74'],
                labels: ['Negatifs', 'Positifs'],
            },
        }
    }

    render() {

        return (

            <div className="donut">
                <Chart   options={this.state.options} series={[this.props.pos,this.props.neg]} type="donut" width="380" />
            </div>
        );
    }
}

export default Camember;