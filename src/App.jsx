// @ts-nocheck
import React, { useEffect, useState } from 'react';
import DetailsReport from './pages/DetailsReport';
import SummaryReport from './pages/SummaryReport';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SummaryReport />} />
        <Route path='details' element={<DetailsReport />} />
      </Routes>
    </div>
  );
}

export default App;
