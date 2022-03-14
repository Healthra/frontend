import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
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

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      fakeData: [
        { x: new Date("December 12, 2016"), y: 99.2 },
        { x: new Date("December 3, 2017"), y: 103.4 },
        { x: new Date("December 7, 2018"), y: 102.1 },
        { x: new Date("December 5, 2019"), y: 105.2 },
        { x: new Date("December 10, 2020"), y: 113.6 },
        { x: new Date("December 8, 2021"), y: 122.4 }
      ],
      selectedData: null,
      unit: "cm"
    }   
  }

  componentDidUpdate(prevProps) {
    if(this.props.data !== prevProps.data || this.props.typeValue !== prevProps.typeValue) {
      var selectedData = this.props.data[this.props.typeValue]
      for(var i=0;i<selectedData.length;i++) {
        selectedData[i].x = new Date(selectedData[i].x)
      }
      this.setState({
          data: this.props.data,
          selectedData: selectedData,
          unit: this.props.unit
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.selectedData ? (
           <VictoryChart
           width={900}
           height={500}
           padding={{ top: 60, bottom: 80, left: 70, right: 100 }}
           domain={{ y: [0, 200] }}
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
             label={this.state.unit}
             style={{
               axisLabel: { fontSize: 20, padding: 40 }
             }}
           />
           <VictoryAxis
             crossAxis
             label="Year"
             scale={{ x: "time" }}
             tickValues={this.state.selectedData.map((d) => d.x)}
             tickFormat={(x) => new Date(x).getFullYear()}
             style={{
               axisLabel: { fontSize: 20, padding: 40 }
             }}
           />
           <VictoryGroup data={this.state.selectedData} color="#0F2DC9">
             <VictoryLine
               data={this.state.selectedData}
               style={{ data: { strokeWidth: 3 } }}
               labels={(d) =>
                 d.y +
                 " lbs" +
                 "\n" +
                 new Date(d.x).toDateString().split(" ").slice(1).join(" ")
               }
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
             <VictoryScatter data={this.state.selectedData} size={({ active }) => (active ? 4 : 5)} />
           </VictoryGroup>
         </VictoryChart>
        ):(
          <VictoryChart
           width={900}
           height={500}
           padding={{ top: 60, bottom: 80, left: 70, right: 100 }}
           domain={{ y: [80, 130] }}
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
             label="lbs"
             style={{
               axisLabel: { fontSize: 20, padding: 40 }
             }}
           />
           <VictoryAxis
             crossAxis
             label="Year"
             scale={{ x: "time" }}
             tickValues={this.state.fakeData.map((d) => d.x)}
             tickFormat={(x) => new Date(x).getFullYear()}
             style={{
               axisLabel: { fontSize: 20, padding: 40 }
             }}
           />
           <VictoryGroup data={this.state.fakeData} color="#0F2DC9">
             <VictoryLine
               data={this.state.fakeData}
               style={{ data: { strokeWidth: 3 } }}
               labels={(d) =>
                 d.y +
                 " lbs" +
                 "\n" +
                 new Date(d.x).toDateString().split(" ").slice(1).join(" ")
               }
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
             <VictoryScatter data={this.state.fakeData} size={({ active }) => (active ? 4 : 5)} />
           </VictoryGroup>
         </VictoryChart>
        )}
      </div>
    );
  }
}
export default Chart;
