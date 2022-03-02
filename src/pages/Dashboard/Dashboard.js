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
      <div className='card'>
        <button>
          Appointments
        </button>
      </div>
      <div className='card'>
        <button>
          Care Team
        </button>
      </div>
      <div className='card'>
        <button>
          Medication
        </button>
      </div>
      <div className='card'>
        <button>
          Test Results
        </button>
      </div>
      <div className='card'>
        <button>
          Emergency resources
        </button>
      </div>
    </div>
  );
}


export default Dashboard;