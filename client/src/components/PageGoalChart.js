import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

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
                            5594,
                            4045,
                            6060,
                            6519,
                            5162,
                            0
                        ],
                        backgroundColor:'#ff9f40'
                
                    },
                    {
                        label: 'Goal',
                        data:[
                            5000,
                            5000,
                            5000,
                            5000,
                            5000,
                            5000
                        ],
                        backgroundColor:"saddlebrown"
                
                    }

                ]
            }
        }
    }
    render(){
        return (
            <Card>
            <div className="chart" style={{ backgroundColor: "#FAF9F6" }} >
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
            </Card>
        )
    }
}

export default PageGoalChart;