import React from 'react';

const Appointments = (props) =>{
  return (
    <div style={{ padding: "10px 30px" }}>
      <div className='header'>
          <div className='leftColumn'>
            <h1>My Appointments</h1>
          </div>
      </div>
      <img className='appointmentImage' src={require("../../images/appointments.png")} />  
    </div>
  );
}


export default Appointments;