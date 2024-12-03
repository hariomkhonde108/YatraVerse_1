import React from 'react';

const TicketConfirmation = ({ 
  departure, 
  destination, 
  pnrNumber, 
  ticketPrice, 
  passengerName, 
  journeyDate, 
  busOperator 
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      border: '2px solid #007bff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{
          color: '#007bff',
          marginBottom: '10px'
        }}>
          Ticket Confirmed
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#6c757d'
        }}>
          Thank you for your booking
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#e9ecef',
        borderRadius: '8px'
      }}>
        <div>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40' }}>Departure</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{departure}</p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#28a745',
            borderRadius: '50%',
            margin: '0 10px'
          }}></div>
          <div style={{
            width: '50px',
            height: '1px',
            backgroundColor: '#6c757d'
          }}></div>
          <div style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#dc3545',
            borderRadius: '50%',
            margin: '0 10px'
          }}></div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40' }}>Destination</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{destination}</p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '15px'
      }}>
        <div style={{
          backgroundColor: '#e9ecef',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40', fontSize: '14px' }}>PNR Number</h4>
          <p style={{ 
            margin: '0', 
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#007bff'
          }}>
            {pnrNumber}
          </p>
        </div>
        <div style={{
          backgroundColor: '#e9ecef',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40', fontSize: '14px' }}>Ticket Price</h4>
          <p style={{ 
            margin: '0', 
            fontWeight: 'bold',
            color: '#28a745'
          }}>
            ₹{ticketPrice}
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px'
      }}>
        <div style={{
          backgroundColor: '#e9ecef',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40', fontSize: '14px' }}>Passenger Name</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{passengerName}</p>
        </div>
        <div style={{
          backgroundColor: '#e9ecef',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#343a40', fontSize: '14px' }}>Journey Date</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{journeyDate}</p>
        </div>
      </div>

      <div style={{
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#6c757d'
      }}>
        Bus Operator: {busOperator}
      </div>

      <div style={{
        marginTop: '20px',
        textAlign: 'center'
      }}>
        <button style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

// Prop validation
TicketConfirmation.propTypes = {
  departure: React.PropTypes.string.isRequired,
  destination: React.PropTypes.string.isRequired,
  pnrNumber: React.PropTypes.string.isRequired,
  ticketPrice: React.PropTypes.number.isRequired,
  passengerName: React.PropTypes.string.isRequired,
  journeyDate: React.PropTypes.string.isRequired,
  busOperator: React.PropTypes.string
};

// Default props
TicketConfirmation.defaultProps = {
  busOperator: 'boOkBuS'
};

export default TicketConfirmation;