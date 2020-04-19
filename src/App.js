import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import Form from './Form/Form'
import Chart from './Chart/Chart'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: null,
      rate: null,
      times: null,
      total: null
    }

    this.updateChart = this.updateChart.bind(this)
  }

  updateChart(amount,rate,times) {
    const unrounded_total = amount * Math.pow(((rate / 100) + 1), times)
    const total = Intl.NumberFormat('en').format(unrounded_total.toFixed())
    this.setState({
      amount,
      rate,
      times,
      total
    })
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="header">
            <div>
              <h1>CompCalc</h1>
              <p>Exponential growth calculator with graph</p>                   
            </div>
          </div> 
          <div className="row">
            <Form 
              updateChart={this.updateChart} 
              total={this.state.total}
              />
            <Chart 
              total={this.state.total}
              amount={this.state.amount}
              rate={this.state.rate}
              times={this.state.times}
              />              
          </div>              
        </div>
      </div>
    );
  }
}

export default App;
