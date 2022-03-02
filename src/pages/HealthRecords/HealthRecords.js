import React from 'react';
import { Link } from "react-router-dom";
import '../pages.css';

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
              <Link to="/record/trends">
                <button>Trends</button>
              </Link>
              <Link to="/record/medications">
                <button>Medications</button>
              </Link>
              <Link to="/record/results">
                <button>Test Results</button>
              </Link>
              <Link to="/record/conditions">
                <button>Current Conditions</button>
              </Link>
              <Link to="/record/allergies">
                <button>Allergies</button>
              </Link>
              <Link to="/record/history">
                <button>Medical History</button>
              </Link>
            </div>
            <div className='content'>
                <div className='card'>
                    
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HealthRecords;