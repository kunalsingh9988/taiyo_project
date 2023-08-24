import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartsMaps = () => {
  const { data } = useQuery(["lineGraph"], async () => {
    const response = await Axios.get("https://disease.sh/v3/covid-19/countries");
    return response.data;
  });

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Cases Fluctuations",
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (data) {
      const updatedUserData = {
        labels: data.map((country: any) => country.country),
        datasets: [
          {
            label: "Cases Fluctuations",
            data: data.map((cases: any) => cases.cases),
          },
        ],
      };
      setUserData(updatedUserData);
    }
  }, [data]);

  return (
    <div className="">
      <h1>Line Graph showing the fluctuation of cases</h1>
      <Line data={userData} />
    </div>
  );
};

export default ChartsMaps;
