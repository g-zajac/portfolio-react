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
      { y: 100, x: "Jan" },
      { y: 112, x: "Feb" },
      { y: 230, x: "Mar" },
      { y: 268, x: "Apr" },
      { y: 300, x: "May" },
      { y: 310, x: "Jun" },
      { y: 315, x: "Jul" },
      { y: 340, x: "Aug" },
      { y: 388, x: "Sep" },
      { y: 404, x: "Oct" },
      { y: 442, x: "Nov" },
      { y: 447, x: "Dec" }
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
    const chartWidth = 900;
    const chartHeight = 400;
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
