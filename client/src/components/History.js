import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import API from "../utils/API";
import { useAuth } from "./authentication/context/AuthContext";

function History() {
    const { currentUser } = useAuth();
    const user = currentUser.uid;


    const [labels, setLabels] = useState([]);
    const [pages, setPages] = useState([]);

    function loadData(setLabels, setPages) {
        var list = {};
        API.getCompleted(user)
            .then(res => {
                list = res.data;
                const labels = [];
                var pages = [];
                list.map(book => {
                    if (book.volumeInfo.categories) {
                        if (labels.includes(book.volumeInfo.categories[0])) {
                            pages[labels.indexOf(book.volumeInfo.categories[0])] += book.volumeInfo.pageCount;
                        } else {
                            labels.push(book.volumeInfo.categories[0]);
                            pages.push(book.volumeInfo.pageCount);
                        }
                        return true;
                    }
                    else {
                        labels.push("Not specified");
                        pages.push(book.volumeInfo.pageCount);
                    }
                    return true;
                })
                setLabels(labels);
                setPages(pages);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        loadData(setLabels, setPages);
    }, []);

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: pages,
                backgroundColor: ['#ff3d67', '#ff9f40', '#ffcd56', '#4bc0c0', '#999999', '#333fde'],
            }
        ],
        showDatapoints: true,
        options: {
            tooltips: {
                enabled: false
            },
            pieceLabel: {
                render: 'label',
                arc: true,
                fontColor: '#000',
                position: 'outside'
            },
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'History',
                fontSize: 20
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }

    }

    return (
        <div className="chart">
            <Pie
                data={chartData}
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
    );
}

export default History;