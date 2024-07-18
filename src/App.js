import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataForm from './components/DataForm';
import PlotChart from './components/PlotChart';
import './App.css';

const Home = ({ handleFormSubmit, data }) => {
  console.log('Home component rendered');
  return(
    <div>
      <h1>Plot a Graph</h1>
      <DataForm onSubmit={handleFormSubmit} />
      <PlotChart data={data} />
    </div>
  );
};

const About = () => <h1>About Page</h1>;

const App = () => {
  const [data, setData] = useState({ x: [], y: [] });

  const handleFormSubmit = (newData) => {
    console.log('Form submitted with data:', newData);
    setData(newData);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home handleFormSubmit={handleFormSubmit} data={data} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

