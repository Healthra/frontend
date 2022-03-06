import React from 'react';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Trends from './Trends/Trends';
import Medications from './Medications/Medications';
import TestResults from './TestResults/TestResults';
import CurrentConditions from './CurrentConditions/CurrentConditions';
import Allergies from './Allergies/Allergies';
import MedicalHistory from './Medical History/Medications';
import Table from '../../components/Table/Table';
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
                <h2>Jonathan Klaudius Doe</h2>
                <h3>ID: 58936 email: jondoe@gmail.com</h3>
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
                  <Routes>
                    <Route path={'/trends'} element={<Trends/>} />
                    <Route path={'/medications'} element={<Medications/>} />
                    <Route path={'/results'} element={<TestResults/>} />
                    <Route path={'/conditions'} element={<CurrentConditions/>} />
                    <Route path={'/allergies'} element={<Allergies/>} />
                    <Route path={'/history'} element={<MedicalHistory/>} />
                    <Route path={'*'} element={<Navigate to='/record/trends'/>} />
                  </Routes>
                  <Table/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HealthRecords;