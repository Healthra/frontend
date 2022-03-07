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
    let path = window.location.pathname.split('/').pop();
    if (path === 'record' || path === '') {
      path = 'trends';
    }
    this.state = {
      page: path
    }
  }

  handlePageChange(path) {
    this.setState({
      page: path
    });
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
              <Link to="/record/trends" onClick={() => this.handlePageChange("trends")}>
                <button className={this.state.page === 'trends' ? 'active' : ''}>Trends</button>
              </Link>
              <Link to="/record/medications" onClick={() => this.handlePageChange("medications")}>
                <button className={this.state.page === 'medications' ? 'active' : ''}>Medications</button>
              </Link>
              <Link to="/record/results" onClick={() => this.handlePageChange("results")}>
                <button className={this.state.page === 'results' ? 'active' : ''}>Test Results</button>
              </Link>
              <Link to="/record/conditions" onClick={() => this.handlePageChange("conditions")}>
                <button className={this.state.page === 'conditions' ? 'active' : ''}>Current Conditions</button>
              </Link>
              <Link to="/record/allergies" onClick={() => this.handlePageChange("allergies")}>
                <button className={this.state.page === 'allergies' ? 'active' : ''}>Allergies</button>
              </Link>
              <Link to="/record/history" onClick={() => this.handlePageChange("history")}>
                <button className={this.state.page === 'history' ? 'active' : ''}>Medical History</button>
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
                  <div className={this.state.page === 'trends' ? 'hide' : ''}>
                    <Table page={this.state.page}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HealthRecords;