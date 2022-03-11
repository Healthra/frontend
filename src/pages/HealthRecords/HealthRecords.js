import React from 'react';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Trends from './Trends/Trends';
import Medications from './Medications/Medications';
import TestResults from './TestResults/TestResults';
import CurrentConditions from './CurrentConditions/CurrentConditions';
import Allergies from './Allergies/Allergies';
import MedicalHistory from './MedicalHistory/MedicalHistory';
import Table from '../../components/Table/Table';
import Chart from '../../components/Chart/Chart'
import '../pages.css';

class HealthRecords extends React.Component {
  constructor(props) {
    super(props);
    let page = this.getPage(window.location.pathname.split('/'));
    this.state = {
      page: page
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getPage(path) {
    let page = path.pop();
    if (page === '' && path.length) {
      page = page.pop();
    }
    if (page === 'record') {
      page = 'trends';
    }
    else if (page === 'history') {
      page = 'immunizations';
    }
    return page;
  }

  handlePageChange(path) {
    this.setState({
      page: path
    });
  }

  isOnHistoryPage(page) {
    let historyTabs = ['immunizations', 'family', 'procedures', 'illnesses'];
    if (historyTabs.indexOf(page) > -1) {
      return true;
    }
    return false;
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
              <Link to="/record/history/immunizations" onClick={() => this.handlePageChange("immunizations")}>
                <button className={this.isOnHistoryPage(this.state.page) ? 'active' : ''}>Medical History</button>
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
                    <Route path={'/history/immunizations'} element={<MedicalHistory page="immunizations" handlePageChange={this.handlePageChange}/>} />
                    <Route path={'/history/family'} element={<MedicalHistory page="family" handlePageChange={this.handlePageChange}/>} />
                    <Route path={'/history/procedures'} element={<MedicalHistory page="procedures" handlePageChange={this.handlePageChange}/>} />
                    <Route path={'/history/illnesses'} element={<MedicalHistory page="illnesses" handlePageChange={this.handlePageChange}/>} />
                    <Route path={'/history'} element={<Navigate to='/record/history/immunizations'/>} />
                    <Route path={'*'} element={<Navigate to='/record/trends'/>} />
                  </Routes>
                  <div className={this.state.page === 'trends' ? '' : 'hide'}>
                    <Chart />
                  </div>
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