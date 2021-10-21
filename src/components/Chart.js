// STEP 1 - Include Dependencies
// Include react
import React from "react";
import moment from "moment";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import line from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
import { useGlobalContext } from "../context/context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, line, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// const timestamp = 1519482900000;
// const formatted = moment(timestamp).format('L');
const Chart = ({ marketData, id }) => {
    const { coinHistory } = useGlobalContext();
    const minValue = []
    const newData = marketData.map((price) => {
        minValue.push(price[1])
        return { label: coinHistory.days === '1' ? moment(price[0]).format('hh:mm a') : moment(price[0]).format('L'), value: price[1] }
    });
    const value = Math.floor(Math.min(...minValue));
    const chartConfigs = {
        type: "line", // The chart type
        width: "100%", // Width of the chart
        height: "650", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: `${id.toUpperCase()}`,
                bgColor: "#F0F3F5",
                bgAlpha: "100",
                // baseFontColor: "#000000",
                // outCnvBaseFontColor: "#633563",
                //Set the chart subcaption
                //Set the x-axis name
                //Set the y-axis name
                //Set the theme for your chart
                theme: "gammel",
                yAxisMinValue: `${(value > 1000 && value - 100) || (value > 100 && value < 1000 && value - 10) || value}`,

            },
            // Chart Data
            data: newData
        }
    };
    return (<ReactFC {...chartConfigs} />);
}


export default Chart;


