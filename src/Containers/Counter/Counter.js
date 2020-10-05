import React, { Component } from 'react'

import classes from './Counter.module.scss';
export default class Counter extends Component {
    state={
        counter:0
    }
    render() {
        return (
            <div data-test='component-counter' className={classes.counter}>
                <div className={classes.counterContainer}>
                    <div data-test="current-value" className={classes.currCounter}>
                        <span>{this.state.counter}</span>
                    </div>
                    <div className={classes.operations}>
                        <span onClick={()=>this.setState({counter: this.state.counter+1})} data-test="incr-button">+</span>
                        <span onClick={()=>this.setState({counter: this.state.counter ? this.state.counter-1:0})} data-test="decr-button">-</span>
                    </div>
                </div>
            </div>
        )
    }
}
