import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    // const [temperature, setTemperature] = useState("");
    // const [scale, setScale] = useState("c");

    // const handleChange = (event) => {
    //     setTemperature(event.target.value);
    // }


    return (
        // <fieldset>
        //     <legend>섭씨 온도를 입력하세요.</legend>
        //     <input value={temperature} onChange={handleChange} />
        //     <BoilingVerdict celsius={parseFloat(temperature)} />
        // </fieldset>

        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    );
}

export default Calculator;