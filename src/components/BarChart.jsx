import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../context";

function BarChart() {
    const { graphModel } = useContext(AppContext);
    const [data, setData] = useState(Object.values(graphModel))
    const [labels, setLabels] = useState(Object.keys(graphModel))

    useEffect(() => {
      setLabels(Object.keys(graphModel))
      setData(Object.values(graphModel))
    }, [graphModel])

    return (
        <div className="w-full">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={{    
                 labels,
                  datasets: [
                      {

                          label: "",
                          data,
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
                    plugins: {
                        title: {
                            // display: true,
                            text: "FrontEnd Framework",
                        },
                        colors: false,
                    },
                }}
            />
        </div>
    );
}
export default BarChart;
