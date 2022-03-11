import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Dashboard from './pages/Dashboard/Dashboard';
import HealthRecords from './pages/HealthRecords/HealthRecords';
import Appointments from './pages/Appointments/Appointments'
import CarePlan from './pages/CarePlan/CarePlan'
import Notifications from './pages/Notifications/Notifications'
import Messages from './pages/Messages/Messages'
import Settings from './pages/Settings/Settings'
import ResetPassword from './pages/Settings/ResetPassword'
import './fonts/Inter/Inter.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: 80 }}>
        <Routes>
          <Route path="/" element={<Dashboard name="first last" id="123" email="yes@gmail.com" />} />
          <Route path="/record/*" element={<HealthRecords/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/careplan" element={<CarePlan/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="*" element={<div>Error: 404, Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

