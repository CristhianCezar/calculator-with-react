import React from "react";
import './Calculator.css';
import Button from "../button/Button";
import Display from "../display/Display";

export default function Calculator() {

    const clean = () => {
        console.log("clean");
    };

    const setOperation = (operation) => {
        console.log(operation);
    }

    const addDigit = (n) => {
        console.log(n);
    }

    return (
        <div className="calculator">
            <Display value={0} />
            <Button nButton="AC" click={clean} triple/>
            <Button nButton="/" click={setOperation} operation/>
            <Button nButton={7} click={addDigit}/>
            <Button nButton={8} click={addDigit}/>
            <Button nButton={9} click={addDigit}/>
            <Button nButton="*" click={setOperation} operation/>
            <Button nButton={4} click={addDigit}/>
            <Button nButton={5} click={addDigit}/>
            <Button nButton={6} click={addDigit}/>
            <Button nButton="-" click={setOperation} operation/>
            <Button nButton={1} click={addDigit}/>
            <Button nButton={2} click={addDigit}/>
            <Button nButton={3} click={addDigit}/>
            <Button nButton="+" click={setOperation} operation/>
            <Button nButton={0} click={addDigit} double/>
            <Button nButton="." click={setOperation}/>
            <Button nButton="=" click={setOperation} operation/>
        </div>
    )
}