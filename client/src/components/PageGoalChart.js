import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class PageGoalChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February','March','April','May','June'],
                datasets:[
                    {
                        label: 'Pages',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            0
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

export default PageGoalChart;