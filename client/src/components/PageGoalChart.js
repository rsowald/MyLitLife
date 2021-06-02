import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Mystery', 'Historical Fiction','Fantasy','Crime','Coming-of-age','Nonfiction'],
                datasets:[
                    {
                        label: 'Pages',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:"green"
                
                    },
                    {
                        label: 'Goal',
                        data:[
                            100000,
                            100000,
                            100000,
                            100000,
                            100000,
                            100000
                        ],
                        backgroundColor:"yellow"
                
                    }

                ]
            }
        }
    }
    render(){
        return (
            <div className="chart">
                <Bar
                  data={this.state.chartData}
                  options={{
                      title: {
                          display: true,
                          text: "Page Count by Genre",
                          fontSize: 25
                      },
                      legend: {
                          display: true,
                          position: "right"
                      }
                  }}
                />
            </div>
        )
    }
}

export default Chart;