import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BookGoalChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February','March','April','May','June'],
                datasets:[
                    {
                        label: 'Books',
                        data:[
                            14,
                            10,
                            15,
                            17,
                            11,
                            0
                        ],
                        backgroundColor:'#ff9f40'
                
                    },
                    {
                        label: 'Goal',
                        data:[
                            12,
                            12,
                            12,
                            12,
                            12,
                            12
                        ],
                        backgroundColor:"saddlebrown"
                
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

export default BookGoalChart;