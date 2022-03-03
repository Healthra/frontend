import React from 'react';
const Dashboard = (props) =>{
  return (
    <div id="records">
      <div className='header'>
          <div className='leftColumn'>
            <h1>Home</h1>
          </div>
          <div className='rightColumn borderLeft'>
              <h2>First Last</h2>
              <h3>ID: 0000 email: abc@gmail.com</h3>
          </div>
      </div>
      <div className='appointmentsCard'>
        <button>
          Appointments
          <img src={require("../../images/upcomingAppointments.png")} />
        </button>
      </div>
      <div className='careTeamCard'>
        <button>
          Care Team
          <img src={require("../../images/careTeam.png")} />
        </button>
      </div>
      <div className='medicationCard'>
        <button>
          Medication
          <img src={require("../../images/medications.png")} />
        </button>
      </div>
      <div className='testResultsCard'>
        <button>
          Test Results
          <img src={require("../../images/testResults.png")} />
        </button>
      </div>
      <div className='emergencyResourcesCard'>
        <button>
          Emergency resources
          <img src={require("../../images/emergencyResources.png")} />
        </button>
      </div>
    </div>
  );
}


export default Dashboard;