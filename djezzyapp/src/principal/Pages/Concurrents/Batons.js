import React ,{Component } from "react";
import Chart from 'react-apexcharts'


class Batons extends Component {
    state= {
        options: {
            colors: ['#ff5866'],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['Djezzy', 'ooredo', 'mobilis']
            }
        },
        series: [
            {
                name: "Evolution des commentaires",
                data: [18, 13, 15]
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

export default Batons;


