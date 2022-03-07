import React from 'react';
import '../HealthRecords.css';
import { Link } from "react-router-dom";
import { touchRippleClasses } from '@mui/material';

class MedicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props ? this.props.page : 'immunizations',
      handlePageChange: this.props.handlePageChange
    }
  }

  handleClick(page) {
    this.setState({
      page: page
    });
    this.state.handlePageChange(page);
  }

  render() {
    return (
      <div className='medicalHistoryHeader'>
        <h1 className='sectionTitle'>Medical History</h1>
        <Link to="/record/history/immunizations" onClick={() => this.handleClick("immunizations")}>
          <h2 className={this.state.page === 'immunizations' ? 'active' : 'inactive'}>
            Immunizations
          </h2>
        </Link>
        <Link to="/record/history/family" onClick={() => this.handleClick("family")}>
          <h2 className={this.state.page === 'family' ? 'active' : 'inactive'}>
            Family History
          </h2>
        </Link>
        <Link to="/record/history/procedures" onClick={() => this.handleClick("procedures")}>
          <h2 className={this.state.page === 'procedures' ? 'active' : 'inactive'}>
            Past Procedures
          </h2>
        </Link>
        <Link to="/record/history/illnesses" onClick={() => this.handleClick("illnesses")}>
          <h2 className={this.state.page === 'illnesses' ? 'active' : 'inactive'}>
            Past Illnesses
          </h2>
        </Link>
      </div>
    );
  }
}

export default MedicalHistory;