import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import HealthRecords from './pages/HealthRecords/HealthRecords';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="record" element={<HealthRecords />} />
      </Routes>
    </div>
  );
}

export default App;
