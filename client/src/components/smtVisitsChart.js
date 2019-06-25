import React from "react";
import axios from "axios";
import { XYPlot, VerticalBarSeries } from "react-vis";

export default class VisitsChart extends React.Component {
  componentDidMount() {
    axios
      .get("/get-smt-chart-data")
      .then(response => {
        // let data = (this.data = response.data);
        // console.log("received data chart: ", data);
      })
      .catch(err => console.log(err));
  }
  render() {
    const data = [
      { y: 10, x: "Jan" },
      { y: 87, x: "Feb" },
      { y: 77, x: "Mar" },
      { y: 65, x: "Apr" },
      { y: 54, x: "May" },
      { y: 31, x: "Jun" },
      { y: 31, x: "Jul" },
      { y: 34, x: "Aug" },
      { y: 98, x: "Sep" },
      { y: 67, x: "Oct" },
      { y: 23, x: "Nov" },
      { y: 44, x: "Dec" },
      { y: 10, x: "Jan2" },
      { y: 41, x: "Feb2" },
      { y: 28, x: "Mar2" },
      { y: 78, x: "Apr2" },
      { y: 38, x: "May2" },
      { y: 56, x: "Jun2" },
      { y: 21, x: "Jul2" },
      { y: 30, x: "Aug2" },
      { y: 56, x: "Sep2" },
      { y: 40, x: "Oct2" },
      { y: 2, x: "Nov2" },
      { y: 10, x: "Dec2" }
    ];
    // let data = [
    //   { summary: 20170527, count: "30" },
    //   { summary: 20170528, count: "36" },
    //   { summary: 20170529, count: "52" },
    //   { summary: 20170530, count: "43" },
    //   { summary: 20170531, count: "49" },
    //   { summary: 20170601, count: "51" }
    // ];
    // const data = this.props.data;
    const chartWidth = 800;
    const chartHeight = 200;
    const chartDomain = [0, chartHeight];
    return (
      <XYPlot
        xType="ordinal"
        width={chartWidth}
        height={chartHeight}
        yDomain={chartDomain}
      >
        <VerticalBarSeries data={data} />
      </XYPlot>
    );
  }
}
