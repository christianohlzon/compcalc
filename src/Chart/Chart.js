import React, { Component } from 'react'
import styles from './Chart.module.css'  
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.chartReference = React.createRef();
    }

    render() {
        console.log("Rerender")
        const data = []
        const labels = []
        let dataset = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Expo growth',
                backgroundColor: '#2db075',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
        for (let i=0; i<this.props.times; i++) {
            // const total = amount * Math.pow(((rate / 100) + 1), time
            const unrounded_total = this.props.amount * Math.pow(((this.props.rate / 100) + 1), i+1)
            const total = parseInt(unrounded_total) 
            console.log("loop")
            labels.push(i+1)
            data.push(total)
        }            
        dataset.labels = labels
        dataset.datasets[0].data = data
        console.log(dataset.datasets[0].data)

        return(
            <div className={styles.container}>
                <Bar
                    data={dataset}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
            </div>      
        )        
    }
}

export default Chart