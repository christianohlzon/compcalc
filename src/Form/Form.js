import React, { useState } from 'react'
import styles from './Form.module.css'

function Form(props) {
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [times, setTimes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateChart(
            amount,
            rate,
            times,
        )
    }

    return(
        <form
            className={styles.container}
            onSubmit={handleSubmit}
            >  
            <label className={styles.label}>
                Initial amount
                <input 
                    className={styles.input}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" 
                    value={amount}
                    placeholder="Initial amount" 
                    />
            </label>             
            <label className={styles.label}>
                Growth rate
                <input 
                    className={styles.input}
                    onChange={(e) => setRate(e.target.value)}
                    type="number"
                    value={rate} 
                    placeholder="Growth rate" 
                    max="100"
                    />
            </label>             
            <label className={styles.label}>
                Number of times
                <input
                    className={styles.input}
                    onChange={(e) => setTimes(e.target.value)} 
                    type="number" 
                    value={times}
                    placeholder="Number of times" 
                    max="100"
                    />
            </label>        
            <button 
                type="submit"
                className={styles.button}
                >
                Update
            </button>        
            {
                props.total &&
                <h2>Total {props.total}</h2>   
            }           
        </form>
    )
}

export default Form