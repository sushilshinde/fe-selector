import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../context";
import staticData from '../models/data.json';
import Loader from "./Loader";

function BarChart() {
    const { graphModel, loading } = useContext(AppContext);

    return (
        <div className="w-full">
            <h2 style={{ textAlign: "center" }}>Frameworks</h2>

            <div className="chart-container" style={{ position: "relative", marginRight: "1%", height: '90vh' }}>
                {
                    loading ? <Loader /> : (
                        <Bar
                            width={'100%'}
                            height={'80%'}
                            data={{
                                labels: graphModel?.map(el => el.name),
                                datasets: [
                                    {
                                        label: "",
                                        data: graphModel?.map(el => el.percent_match.split('%')[0]),
                                        borderRadius: 5,
                                        backgroundColor: [
                                            "rgba(255, 99, 132, 0.2)",
                                            "rgba(255, 159, 64, 0.2)",
                                            "rgba(255, 205, 86, 0.2)",
                                            "rgba(75, 192, 192, 0.2)",
                                            "rgba(54, 162, 235, 0.2)",
                                            "rgba(153, 102, 255, 0.2)",
                                            "rgba(201, 203, 207, 0.2)",
                                        ],
                                        borderColor: [
                                            "rgb(255, 99, 132)",
                                            "rgb(255, 159, 64)",
                                            "rgb(255, 205, 86)",
                                            "rgb(75, 192, 192)",
                                            "rgb(54, 162, 235)",
                                            "rgb(153, 102, 255)",
                                            "rgb(201, 203, 207)",
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            options={{
                                // maintainAspectRatio:true,
                                plugins: {
                                    tooltip: {
                                        callbacks: {
                                            label: function () {
                                                return `${graphModel[this.dataPoints[0].dataIndex].reasons.join('\n')}`
                                            },
                                            title: function () {
                                                return graphModel[this.dataPoints[0].dataIndex].name
                                            },
                                            footer: function () {
                                                return graphModel[this.dataPoints[0].dataIndex].website_url
                                            }
                                            
                                        }
                                    },
                                    colors: false,
                                },
                                responsive: true,
                                scales: {

                                    y: {
                                        type: 'linear',
                                        suggestedMax: 100,
                                        ticks: {
                                            callback: function (value) {
                                                return (value / this.max * 100) + '%'; // convert it to percentage
                                            },
                                        },
                                    },

                                },
                            }}
                        />)
                }
            </div>
        </div>
    );
}
export default BarChart;
