import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import API from "../utils/API";
import { useAuth } from "./authentication/context/AuthContext";
import { Card } from 'react-bootstrap';
import { useUser } from "../context/UserContext";

function BookGoalChart() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    const { currentUser } = useAuth();
    const firebaseUser = currentUser.uid;
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const [labels, setLabels] = useState([]);
    const [books, setBooks] = useState([]);
    const [goals, setGoals] = useState([]);
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

    async function getBooks(max) {
        var totals = [];
        for (let i = 0; i < max; i++) {
            totals.push(0);
        }

        try {
            const books = await API.getCompleted(firebaseUser);
            books.data.forEach((book) => {
                const ma = monthsAgo(book.createdAt, max);
                if (ma >= 0) {
                    totals[ma] += 1;
                }
            });
        } catch (err) {
            console.log(err)
        }
        return totals;
    }

    const numberOfMonthsBack = 6;

    useEffect(() => {
        const load = async () => {
            setLabels(getLabels(numberOfMonthsBack));
            const booksArr = await getBooks(numberOfMonthsBack);
            setBooks(booksArr);
        }
        load();
    }, []);

    useEffect(() => {
        if (!user.bookGoal) {
            return;
        }
        let goal = [];
        const booksPerMonth = user.bookGoal / 12;
        for (var i = 0; i < numberOfMonthsBack; i++) {
            goal.push(booksPerMonth)
        }
        setGoals(goal);
    }, [user]);

    var chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Books',
                data: books,
                backgroundColor: '#ff9f40'
            },
            {
                label: 'Goal',
                data: goals,
                backgroundColor: "saddlebrown"
            }
        ]
    };

    return (
        <Card>
            <div className="chart" style={{ backgroundColor: "#FAF9F6" }} >
                <Bar
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Book Count and Goal",
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