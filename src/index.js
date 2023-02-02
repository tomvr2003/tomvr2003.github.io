import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/00navbar/navbar';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
  </React.StrictMode>
);

 