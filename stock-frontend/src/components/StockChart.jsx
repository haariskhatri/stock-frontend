import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pricedata from '../assets/btc.json'
import moment from 'moment/moment';

const StockChartApp = () => {
    const options = {
        title: {
            text: null
        },
        chart: {
            backgroundColor: '#fffff'
        },
        tooltip: {
            shared: true,
            formatter: function () {
                return numberFormat.format(this.y, 0) + '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
            }
        },

        xAxis: {
            type: 'date',
            lineColor: '#d3cece4d', // Set x-axis line color to green
            tickColor: '#fffff' // Set x-axis tick color to green
        },
        yAxis: {
            lineColor: '#197113', // Set y-axis line color to green
            tickColor: '#fffff', // Set y-axis tick color to green
            gridLineWidth: '0',
            labels: {
                formatter: function () {
                    return ''; // Set y-axis labels to an empty string
                }
            },
            title: {
                text: ''
            }

        },

        plotOptions: {
            line: {
                lineWidth: 2, // Set line width to 3 (or any desired value)
                color: '#0abb92' // Set line color to green
            },
            series: {
                showInNavigator: true,
                gapSize: 6,

            }
        },



        credits: {
            enabled: false
        },
        legend: {
            enabled: true
        },

        rangeSelector: {
            buttons: [{
                type: 'day',
                count: 1,
                text: '1d',
            }, {
                type: 'day',
                count: 7,
                text: '7d'
            }, {
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 3,
                text: '3m'
            },
            {
                type: 'all',
                text: 'All'
            }],
            selected: 4
        },

        series: [{
            name: 'Price',
            type: 'spline',

            data: pricedata,
            tooltip: {
                valueDecimals: 2
            },
            color: '#00d09c'

        }
        ]
    };



    return (
        <div className='stock-chart'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default StockChartApp;
