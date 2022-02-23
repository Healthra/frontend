import React from 'react';
import './HealthRecords.css';

class HealthRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id='records'>
          <div className='header'>
              <div className='leftColumn'>
                <h1>Health Records</h1>
              </div>
              <div className='rightColumn borderLeft'>
                  <h2>First Last</h2>
                  <h3>ID: 0000 email: abc@gmail.com</h3>
              </div>
          </div>
          <div className='body'>
            <div className='nav'>
                <button>Trends</button>
                <button>Medications</button>
                <button>Test Results</button>
                <button>Current Conditions</button>
                <button>Allergies</button>
                <button>Medical History</button>
            </div>
            <div className='content'>

            </div>
          </div>
      </div>
    );
  }
}

export default HealthRecords;