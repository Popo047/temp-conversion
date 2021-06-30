import React, { useState } from "react";
import "./Converter.css";

function ConverterF() {
  const [temp, setTemp] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setTemp(event.target.value);
  };

  return (
    <div className="form container __form">
      <form action="" className="form">
        <label htmlFor=""></label>
        <input
          placeholder="Enter Temp in Farenheit"
          className="form-control"
          type="number"
          step="0.1"
          value={temp}
          onChange={onChangeHandler}
        />
      </form>
      <br />
      <p className="op">
        Output in Celsius is{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {((temp - 32) * 0.5555).toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default ConverterF;
