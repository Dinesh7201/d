import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  const handleChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={handleChange}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
