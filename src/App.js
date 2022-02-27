import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Dashboard from './pages/Dashboard/Dashboard';
import HealthRecords from './pages/HealthRecords/HealthRecords';
import './fonts/Inter/Inter.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard name="first last" id="123" email="yes@gmail.com" />} />
        <Route path="record" element={<HealthRecords />} />
      </Routes>
    </div>
  );
}

export default App;

