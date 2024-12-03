import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bus, date, passengers } = location.state;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Booking Confirmed</h2>
      <div style={{ fontSize: "16px", marginTop: "10px" }}>
        ✅ Your ticket is successfully booked!
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p>
          <strong>Departure:</strong> {bus.departure}
        </p>
        <p>
          <strong>Destination:</strong> {bus.destination}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Fare:</strong> ₹{bus.price}
        </p>
        <p>
          <strong>Passengers:</strong> {passengers}
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
