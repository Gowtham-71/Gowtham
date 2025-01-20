import React, { useState } from 'react';
import './App.css';
import TreatmentSelector from './components/TreatmentSelector';

function App() {
  const [selectedTreatments, setSelectedTreatments] = useState([]);

  const handleSelectionUpdate = (newSelection) => {
    setSelectedTreatments(newSelection);
  };
  return (
     <div className="app-container">
      <div className="content">
        <h1>Treatment Selector</h1>
        <TreatmentSelector
          selectedTreatments={selectedTreatments}
          onSelectionUpdate={handleSelectionUpdate}
        />
      </div>
    </div>
  );
}

export default App;
