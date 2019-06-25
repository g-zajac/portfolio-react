import React from "react";
import { XYPlot, VerticalBarSeries } from "react-vis";

export default class VisitsChart extends React.Component {
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
    // const data = this.props.data;
    const chartWidth = 800;
    const chartHeight = 500;
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
