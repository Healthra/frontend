import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Dashboard from './pages/Dashboard/Dashboard';
import HealthRecords from './pages/HealthRecords/HealthRecords';
import './fonts/Inter/Inter.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: 80 }}>
        <Routes>
          <Route path="/" element={<Dashboard name="first last" id="123" email="yes@gmail.com" />} />
          <Route path="/record/*" element={<HealthRecords/>} />
          <Route path="*" element={<div>Error: 404, Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

