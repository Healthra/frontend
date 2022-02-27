import React from 'react';
const Dashboard = (props) =>{
  return (
    <div id="records">
          <div className='header'>
              <div className='leftColumn'>
                <h1>Health Records</h1>
              </div>
              <div className='rightColumn borderLeft'>
                  <h2>First Last</h2>
                  <h3>ID: 0000 email: abc@gmail.com</h3>
              </div>
          </div>
      <button>
        Appointments
      </button>
      <button>
        Care Team
      </button>
      <button>
        Medication
      </button>
      <button>
        Test Results
      </button>
      <button>
        Emergency resources
      </button>
    </div>
  );
}


export default Dashboard;