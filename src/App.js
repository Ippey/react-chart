import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Editor from "./Editor";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
          data: {
              labels: ["からさ", "うまさ", "ボリューム", "値段"],
              datasets: [
                  {
                      label: 'CoCo壱番屋',
                      data: [3, 2, 4, 3],
                      borderColor: "rgba(255, 0, 0, 1)",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }
              ]
          },
          options: {
              maintainAspectRatio: false,
              scale: {
                  ticks: {
                      min: 0,
                      max: 5
                  }
              },
          }

      }
  }

  addData(label, hot, taste, volume, price) {
      const row = {
          label: label,
          data: [hot, taste, volume, price],
          borderColor: 'rgba(0, 255, 0, 1)',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
      };
      let newData = this.state.data;
      newData.datasets.push(row);
      this.setState({data: newData})
  }

  render() {
    return (
      <div className="App">
        <Chart data={this.state.data} options={this.state.options}/>
          <hr/>
        <Editor add={(label, hot, taste, volume, price) => this.addData(label, hot, taste, volume, price)}/>
      </div>
    );
  }
}

export default App;
