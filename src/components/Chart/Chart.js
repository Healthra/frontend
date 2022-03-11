import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryGroup,
  VictoryTooltip,
  VictoryAxis,
  VictoryCursorContainer,
  createContainer
} from "victory";

const VictoryCursorVoronoiContainer = createContainer("cursor", "voronoi");

const data = [
  { x: new Date("December 12, 2016"), y: 99.2 },
  { x: new Date("December 3, 2017"), y: 103.4 },
  { x: new Date("December 7, 2018"), y: 102.1 },
  { x: new Date("December 5, 2019"), y: 105.2 },
  { x: new Date("December 10, 2020"), y: 113.6 },
  { x: new Date("December 8, 2021"), y: 122.4 }
];

class Chart extends React.Component {
  render() {
    return (
      <VictoryChart
        width={900}
        height={500}
        padding={{ top: 60, bottom: 80, left: 70, right: 100 }}
        domain={{ y: [80, 140] }}
        containerComponent={
          <VictoryCursorVoronoiContainer
            cursorDimension="x"
            voronoiDimension="x"
          />
        }
      >
        <VictoryAxis
          dependentAxis
          crossAxis
          offsetX={100}
          orientation="right"
          label="Pounds"
          style={{
            axisLabel: { fontSize: 20, padding: 40 }
          }}
        />
        <VictoryAxis
          crossAxis
          label="Year"
          scale={{ x: "time" }}
          tickValues={data.map((d) => d.x)}
          tickFormat={(x) => new Date(x).getFullYear()}
          style={{
            axisLabel: { fontSize: 20, padding: 40 }
          }}
        />
        <VictoryGroup data={data} color="#0F2DC9">
          <VictoryLine
            data={data}
            style={{ data: { strokeWidth: 3 } }}
            // labels={(d) =>
            //   d.y +
            //   " lbs" +
            //   "\n" +
            //   d.x.toDateString().split(" ").slice(1).join(" ")
            // }
            labelComponent={
              <VictoryTooltip
                cornerRadius={8}
                pointerLength={15}
                pointerWidth={0}
                flyoutStyle={{
                  stroke: "black",
                  fill: "white"
                }}
              />
            }
          />
          <VictoryScatter data={data} size={({ active }) => (active ? 4 : 5)} />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}
export default Chart;
