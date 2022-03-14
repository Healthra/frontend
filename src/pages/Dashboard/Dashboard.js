import React from 'react';
// import { useHistory } from 'react-router-dom';

const Dashboard = (props) =>{
  return (
    <div style={{ padding: "10px 30px" }}>
      <div className='header'>
          <div className='leftColumn'>
            <h1>Home</h1>
          </div>
          <div className='rightColumn borderLeft'>
              <h2>Jon Doe</h2>
              <h3>ID: 5 email: klaudius123@gmail.com</h3>
          </div>
      </div>
      <div className='cardWrap'>
        <div className='cardRowWrap'>
          <div className='appointmentsCard'>
            <button className='cardButton' onClick={()=> {window.location.href='/frontend/appointments'}}>
              {/* Appointments */}
              <img style={{ width: 430 }} src={require("../../images/upcomingAppointments.png")} />
            </button>
          </div>
          <div className='careTeamCard'>
            <button className='cardButton' onClick={()=> {window.location.href='/frontend/careplan'}}>
              {/* Care Team */}
              <img style={{ width: 240 }} src={require("../../images/careTeam.png")} />
            </button>
          </div>
          <div className='emergencyResourcesCard'>
            <button className='cardButton'>
              {/* Emergency resources */}
              <img style={{ width: 280 }} src={require("../../images/emergencyResources.png")} />
            </button>
          </div>
        </div>
        <div className='secondRow'>
          <div className='medicationCard'>
            <button className='cardButton' onClick={()=> {window.location.href='/frontend/record/medications'}}>
              {/* Medication */}
              <img style={{ width: 350 }} src={require("../../images/medications.png")} />
            </button>
          </div>
          <div className='testResultsCard'>
            <button className='cardButton' onClick={()=> {window.location.href='/frontend/record/results'}}>
              {/* Test Results */}
              <img style={{ width: 310 }} src={require("../../images/testResults.png")} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;