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
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, ""),
};
const data = [
  {
    name: "Post A",
    Likes: 4000,
    Dislikes: 2400,
    amt: 2400,
  },
  {
    name: "Post B",
    Likes: 3000,
    Dislikes: 1398,
    amt: 2210,
  },
  {
    name: "Post C",
    Likes: 2000,
    Dislikes: 9800,
    amt: 2290,
  },
  {
    name: "Post D",
    Likes: 2780,
    Dislikes: 3908,
    amt: 2000,
  },
  {
    name: "Post E",
    Likes: 1890,
    Dislikes: 4800,
    amt: 2181,
  },
  {
    name: "Post F",
    Likes: 2390,
    Dislikes: 3800,
    amt: 2500,
  },
  {
    name: "Post G",
    Likes: 3490,
    Dislikes: 4300,
    amt: 2100,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div>
        <LineChart
          width={1000}
          height={500}
          data={this.state.data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="mileagethousands" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="mileagethousands" stroke="#82ca9d" />
        </LineChart>
        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            this.setState(
              {
                data: data.sort(function (a, b) {
                  return a.mileagethousands - b.mileagethousands;
                }),
              },
              () => console.log(data, fileInfo)
            )
          }
          parserOptions={papaparseOptions}
        />
      </div>
    );
  }
}

export default App;
