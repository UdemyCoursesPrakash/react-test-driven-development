import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/input';

import classes from './calculator.module.scss';
export default class calculator extends Component {
    state = {
        numOne : 0,
        numTwo : 0,
        result : 0
    }
    handleChange = (name , value)=>{
        this.setState({
            [name] : value
        })
    }

    addition = () =>{
        this.setState({
            result : parseInt(this.state.numOne) + parseInt(this.state.numTwo)
        })
    }

    substraction = () =>{
        this.setState({
            result : parseInt(this.state.numOne) - parseInt(this.state.numTwo)
        })
    }

    multiply = () =>{
        this.setState({
            result : parseInt(this.state.numOne) * parseInt(this.state.numTwo)
        })
    }

    divide = () =>{
        this.setState({
            result : parseInt(this.state.numOne) / parseInt(this.state.numTwo)
        })
    }

    render() {
        return (
            <div data-test="calculator">
                <div data-test="result">{this.state.result}</div>
                <div className="inputs">
                    <div data-test="input">
                        <Input
                            label='Number One'
                            name = 'numOne'
                            change = {this.handleChange}
                        />
                    </div>
                    <div data-test="input">
                        <Input
                            label='Number Two'
                            name = 'numTwo'
                            change = {this.handleChange}
                        />
                    </div>
                </div>
                <div data-test="operations" className={classes.operations}>
                    <div>
                        <button onClick={()=>this.addition()} className={classes.btn} >ADD</button>
                    </div>
                    <div>
                        <button onClick={()=>this.substraction()} className={classes.btn} >SUBSTRACT</button>
                    </div>
                    <div>
                        <button onClick={()=>this.multiply()} className={classes.btn}>MULTIPLY</button>
                    </div>
                    <div>
                        <button onClick={()=>this.divide()} className={classes.btn}>DIVIDE</button>
                    </div>
                </div>
            </div>
        )
    }
}
