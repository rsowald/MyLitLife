import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class History extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Mystery', 'Historical Fiction','Fantasy','Crime','Coming-of-age','Nonfiction'],
                datasets:[
                    {
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ]
                    }
                ]
            }
        }
    }
    render(){
        return (
            <div className="chart">
                <Pie
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

export default History;