
import React from "react";
import Chart from "react-apexcharts";
import Grid from "@material-ui/core/Grid";


class Graph_Line extends React.Component {

            render() {
                var options = {
                        series: [{
                        name: 'Daily active users',
                        type: 'area',
                        data:  this.props.DAU_DATA
                    }, {
                        name: 'Weekly active users',
                        type: 'line',
                        data:  this.props.WAU_DATA
                    },
                        {
                            name: 'Monthly active users',
                            type: 'line',
                            data:  this.props.MAU_DATA
                        }
                    ],


                    chart: {
                        height: 350,
                        type: 'line',
                    },
                    stroke: {
                        curve: 'smooth'
                    },

                    colors: ['#F7B2B2','#f78383','#D36767'],

                    fill: {
                        type:'solid',
                        opacity: [0.35, 1],
                    },
                    labels:  this.props.Labels,
                    markers: {
                        size: 0
                    },
                    yaxis:

                        [

                        {

                            title: {
                                text: 'Monthly active user',
                            },
                        },
                        {
                            opposite: true,
                            title: {
                                text: 'Daily active user',
                            },
                        },
                    ],
                    tooltip: {
                        shared: true,
                        intersect: false,
                        y: {
                            formatter: function (y) {
                                if(typeof y !== "undefined") {
                                    return  y.toFixed(0) + " users";
                                }
                                return y;
                            }
                        }
                    }
                };

                return (
                    <Grid container spacing={4} direction="row" justify="center"  alignItems="center" >
                        <Chart
                            options={options}
                            series={options.series}
                            type="line"
                            width="1500"
                            height="400"
                        />
                    </Grid>
                );
            }
}


export default Graph_Line;