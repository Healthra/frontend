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

const API_URL = 'http://localhost:8080/healthrecords?email=abc@gmail.com';

class HealthRecords extends React.Component {
  constructor(props) {
    super(props);
    let page = this.getPage(window.location.pathname.split('/'));
    this.state = {
      page: page,
      data: {},
      email: 'abc@gmail.com',
      name: '',
      id: '',
      isLoading: true
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Origin','http://localhost:3000');

    try {
        var response = await fetch(API_URL, 
        {
          method: "GET",
          headers: headers
        });
        var resp = await response.json();
        if (resp) {
          let name = '';
          let id = '';
          if (resp.patient) {
            name = resp.patient.firstname + " " + resp.patient.lastname;
            id = resp.patient.ID
          }
          let data = {
            "medications": resp.medications,
            "results": resp.diagnosticReports,
            "conditions": resp.currentConditions,
            "allergies": resp.allergyIntolerances,
            "immunizations": resp.immunizations,
            "family": resp.familyMemberHistories,
            "procedures": resp.procedures,
            "illnesses": resp.pastIllnesses
          }
          this.setState({
            name: name,
            id: id,
            data: data,
          })
        }
      }
    catch(err) {
        console.log('err',err)
    }
    this.setState({
      isLoading: false
    })
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
                <h2>{this.state.name}</h2>
                <h3>ID: {this.state.id} email: {this.state.email}</h3>
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
            <div id="healthRecord" className='content'>
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
                  
                  </div>
                  <div className={this.state.page === 'trends' ? 'hide' : ''}>
                    <Table page={this.state.page} data={this.state.data} needsUpdate={!this.state.isLoading}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HealthRecords;