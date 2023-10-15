import React, { useState } from 'react';
import { differenceInYears } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [calculatedAge, setCalculatedAge] = useState('');

  const handleCalculateAge = () => {
    const today = new Date();
    const dob = new Date(dateOfBirth);

    const diffInYears = differenceInYears(today, dob);

    setCalculatedAge(diffInYears);
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    }}>
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        className="form-control"
        placeholder="Enter your date of birth (dd-mm-yyyy)"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        style={{ width: '50%' }}
      />
      <br />
      <button className="btn btn-primary" onClick={handleCalculateAge}>Calculate Age</button>
      <h3>You are {calculatedAge} years old</h3>
    </div>
  );
};

export default AgeCalculator;
