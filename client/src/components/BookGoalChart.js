import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "./authentication/context/AuthContext";
import { useUser } from "../context/UserContext";


function BookGoalChart(props) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    const { currentUser } = useAuth();
    const firebaseUser = currentUser.uid;
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const [labels, setLabels] = useState([]);
    const [books, setBooks] = useState([]);
    const [bookGoal, setBookGoal] = useState(0);
    const { user } = useUser();

    function getLabels(count) {
        var mos = [];
        for (var i = 0; i < count; i++) {
            let mo = currentMonth - i;
            if (mo < 0) {
                mo += 12;
            }
            mos.push(months[mo])
        }
        return mos;
    };

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
    };

    function getBooks(max) {
        let BookTotals = [];
    }

    const numberOfMonthsBack = 6;

    useEffect(() => {
        setLabels(getLabels(numberOfMonthsBack));
    }, []);

    useEffect(() => {
        let goal = [];
        const booksPerMonth = user.bookGoal / 12;
        for (var i = 0; i < numberOfMonthsBack; i++) {
            goal.push(booksPerMonth)
        }
        setBookGoal(goal);
    }, [user]);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Books',
                data: [
                    3,
                    3,
                    4,
                    2,
                    2,
                    0
                ],
                backgroundColor: '#ff9f40'

            },
            {
                label: 'Goal',
                data: bookGoal,
                // data: [
                //     12,
                //     12,
                //     12,
                //     12,
                //     12,
                //     12
                // ],
                backgroundColor: "saddlebrown"

            }

        ]
    }



    return (
        <Card>
            <div className="chart" style={{ backgroundColor: "#FAF9F6" }} >
                <Bar
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Books to Read",
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

export default BookGoalChart;