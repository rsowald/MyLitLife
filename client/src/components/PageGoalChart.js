import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import API from "../utils/API";
import { useAuth } from "./authentication/context/AuthContext";
import { Card } from 'react-bootstrap';

function PageGoalChart() {
    const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var date = new Date();
    const { currentUser } = useAuth();
    const user = currentUser.uid;
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const [labels, setLabels] = useState([]);
    const [pages, setPages] = useState([]);

    function getLabels (count){
        var mos = [];
        for (var i = 0; i < count; i++){
            let mo = currentMonth - i;
            if (mo < 0){
                mo += 12;
            }
            mos.push(months[mo])
        }
        return mos;   
    }

    function monthsAgo(date, max) {
        const timestamp = new Date(date);
        const yearDiff = currentYear - timestamp.getFullYear();
        var monDiff = currentMonth - timestamp.getMonth();
        switch (yearDiff) {
            case 0:
                if (monDiff < max) {
                    return monDiff;
                }
                return false;
            case 1:
                if (monDiff < 0) {
                    monDiff += 12;
                }
                if (monDiff < max) {
                    return monDiff;
                }
                return false;
            default:
                return false;
        }
    }

    function getPages (max){
        var pageTotals = [];
        for (var i = 0; i < max; i++){
            pageTotals.push(0);
        }
        var list = {};
        API.getCompleted(user)
          .then(res => {
            list = res.data;
            list.map((book) => {
                const ma = monthsAgo(book.createdAt, max);
                if(ma >= 0){
                    pageTotals[ma] += book.volumeInfo.pageCount;
                }
            })
          })
          .catch((err) => console.log(err));
          return pageTotals;   
    }

    useEffect(() => {
        const numberOfMonthsBack = 6;
        setLabels(getLabels (numberOfMonthsBack));
        setPages(getPages(numberOfMonthsBack));
    }, []);
  
    const chartData = {
                labels: labels,
                datasets:[
                    {
                        label: 'Pages',
//                        data: pages,
data: [4567,5678,6789,6789,5678,4567],
backgroundColor: '#ff9f40'
                
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

        return (
            <Card>
            <div className="chart" style={{ backgroundColor: "#FAF9F6" }} >
                <Bar
                  data={ chartData }
                  options={{
                      title: {
                          display: true,
                          text: "Page Count and Goal",
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

export default PageGoalChart;