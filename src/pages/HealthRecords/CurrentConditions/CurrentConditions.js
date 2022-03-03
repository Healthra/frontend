import React from 'react';
import '../HealthRecords.css';

class CurrentConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className='sectionTitle'>Current Conditions</h1>
      </div>
    );
  }
}

export default CurrentConditions;