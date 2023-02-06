import React, { Component } from "react";
import './Calculator.css';
import Button from "../button/Button";
import Display from "../display/Display";


const inicialState = {
    displayValue: "0",
    cleanDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculator extends Component {

    state = { ...inicialState };

    constructor(props) {
        super(props)

        this.cleanMemory = this.cleanMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    cleanMemory() {
        this.setState({ ...inicialState })
    }

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({operation, current:1, cleanDisplay: true});
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                cleanDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const cleanDisplay = this.state.displayValue === 0 || this.state.cleanDisplay;
        const currentValue = cleanDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, cleanDisplay: false});

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values })
            console.log(values)
        }
    }


render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button nButton="AC" click={this.cleanMemory} triple/>
                <Button nButton="/" click={this.setOperation} operation/>
                <Button nButton={7} click={this.addDigit}/>
                <Button nButton={8} click={this.addDigit}/>
                <Button nButton={9} click={this.addDigit}/>
                <Button nButton="*" click={this.setOperation} operation/>
                <Button nButton={4} click={this.addDigit}/>
                <Button nButton={5} click={this.addDigit}/>
                <Button nButton={6} click={this.addDigit}/>
                <Button nButton="-" click={this.setOperation} operation/>
                <Button nButton={1} click={this.addDigit}/>
                <Button nButton={2} click={this.addDigit}/>
                <Button nButton={3} click={this.addDigit}/>
                <Button nButton="+" click={this.setOperation} operation/>
                <Button nButton={0} click={this.addDigit} double/>
                <Button nButton="." click={this.addDigit}/>
                <Button nButton="=" click={this.setOperation} operation/>
            </div>
        )
    }
}