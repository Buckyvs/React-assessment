import React, { useState } from 'react';

const DataForm = ({ onSubmit }) => {
  const [xData, setXData] = useState('');
  const [yData, setYData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const x = xData.split(',').map(Number);
    const y = yData.split(',').map(Number);
    onSubmit({ x, y });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>X-axis data (comma-separated):</label>
        <input
          type="text"
          value={xData}
          onChange={(e) => setXData(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Y-axis data (comma-separated):</label>
        <input
          type="text"
          value={yData}
          onChange={(e) => setYData(e.target.value)}
          required
        />
      </div>
      <button type="submit">Plot</button>
    </form>
  );
};

export default DataForm;
