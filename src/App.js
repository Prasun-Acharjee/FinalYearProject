import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CSVReader from "react-csv-reader";
import NodeGraph from "./nodeGraph";
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, ""),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], xaxis: "", yaxis: "" };
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <LineChart
          width={1000}
          height={500}
          data={this.state.data}
          margin={{
            top: 15,
            bottom: 15,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey={this.state.xaxis} />
          <YAxis dataKey={this.state.yaxis} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={this.state.yaxis}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={this.state.xaxis} stroke="#82ca9d" />
        </LineChart>
        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            this.setState(
              {
                data: data,
                xaxis: "",
                yaxis: "",
              },
              () => console.log(data, fileInfo)
            )
          }
          parserOptions={papaparseOptions}
        />
        {this.state.data?.length > 0 && (
          <>
            <select
              placeholder="select x axis"
              onChange={(e) =>
                this.setState(
                  {
                    xaxis: e.target.value,
                    data: this.state.data.sort(function (a, b) {
                      return a[e.target.value] - b[e.target.value];
                    }),
                  },
                  () => console.log(this.state)
                )
              }
            >
              {Object.keys(this.state.data[0])?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              placeholder="select y axis"
              onChange={(e) => this.setState({ yaxis: e.target.value })}
            >
              {Object.keys(this.state.data[0])?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </>
        )}
        <NodeGraph />
      </div>
    );
  }
}

export default App;
