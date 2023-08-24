import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import WorldMap from "../components/WorldMap";
import { Line } from "react-chartjs-2"; // Importing Line component from react-chartjs-2
import { Chart as ChartJS } from "chart.js/auto"; // Importing Chart component from chart.js/auto

const ChartsMaps = () => {
  // Fetch data using the useQuery hook
  const { data } = useQuery(["lineGraph"], async () => {
    const response = await Axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
    return response.data;
  });

  // State to store graph data for the Line component
  const [graphData, setGraphData] = useState({
    labels: [], // X-axis labels
    datasets: [
      {
        label: "Cases Fluctuations",
        data: [], // Y-axis data
        fill: false,
        borderColor: "blue", // Line color
      },
    ],
  });

  // useEffect to update graphData when data changes
  useEffect(() => {
    if (data) {
      // Extract dates and cases data from API response
      const dates = Object.keys(data.cases);
      const casesData = Object.values(data.cases);
      
      // Update graphData with extracted data
      const updatedGraphData = {
        labels: dates, // Set X-axis labels to dates
        datasets: [
          {
            label: "Cases Fluctuations",
            data: casesData, // Set Y-axis data to casesData
            fill: false,
            borderColor: "blue",
          },
        ],
      };
      setGraphData(updatedGraphData); // Update the state with new graph data
    }
  }, [data]);

  return (
    <div className="w-60 h-60 sm:w-2/3 sm:h-2/3">
      <h1 className="font-bold text-lg">Line Graph showing the fluctuation of cases</h1>
      <Line data={graphData} /> {/* Render the Line chart with graphData */}
    <WorldMap/>
    </div>
  );
};

export default ChartsMaps;
