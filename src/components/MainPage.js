import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Include useNavigate

const MainPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleBooking = (bus) => {
    // Redirect with bus details
    navigate("/booking-confirmation", { state: { bus, date, passengers } });
  };
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    if (departure === destination) {
      setError("Departure and destination cannot be the same.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/search", {
        departure,
        destination,
        date,
        passengers,
      });
      setBuses(response.data.buses);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundImage:
        "url('https://www.kbuses.in/resources/water_busimages/Bus.svg')",
        backgroundRepeat: "no-repeat",
        backgroundColor: "hsla(89, 43%, 51%, 0.3)", // Light blue background
        minHeight: "100vh",
      }}
    >
      {!showContent && (
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "green",
            
        
          }}
        >
          <h1>Book Bus</h1>
          {/* <img
            src="https://www.kbuses.in/resources/water_busimages/Bus.svg"
            alt="Bus"
            style={{ width: "300px", height: "auto", marginBottom: "20px" }}
          /> */}
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "40px",
            }}
            onClick={() => setShowContent(true)}
          >
            Book Ticket
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              width: "80%",
              maxWidth: "1000px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "stretch",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "1 1 calc(25% - 10px)", // Ensures responsive layout with 4 items per row
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "300px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1c/0b/f8/42/beautiful-view-from-mulyangiri.jpg"
                  alt="Feature 1"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                <a href="">Book To Travel</a>
                </h3>
              </div>

              <div
                style={{
                  flex: "1 1 calc(25% - 10px)",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "300px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg"
                  alt="Feature 2"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                <a href="">Book To Travel</a>
                </h3>
              </div>

              <div
                style={{
                  flex: "1 1 calc(25% - 10px)",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "300px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg"
                  alt="Feature 3"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                <a href="">Book To Travel</a>
                </h3>
              </div>

              <div
                style={{
                  flex: "1 1 calc(25% - 10px)",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "300px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vasanta_Mantapa_Santhebennur.jpg/220px-Vasanta_Mantapa_Santhebennur.jpg"
                  alt="Feature 4"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                  <a href="">Book To Travel</a>
                </h3>
              </div>
            </div>
          </div>
        </header>
      )}

      {showContent && (
        <main>
          <div style={{ marginBottom: "30px", padding: "10px" }}>
            <h2 style={{ marginBottom: "20px" }}>Search for Buses</h2>
            <form
              onSubmit={handleSearch}
              style={{
                display: "inline-block",
                textAlign: "left",
                backgroundColor: "Azure",
              }}
            >
              {/* Dropdown for Departure */}
              <select
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                style={{
                  display: "block",
                  width: "220px",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              >
                <option value="" disabled>
                  Select Departure
                </option>
                <option value="Bengaluru">Bengaluru</option>
    <option value="Mysore">Mysore</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Goa">Goa</option>
    <option value="Kochi">Kochi</option>
    <option value="Agra">Agra</option>
    <option value="Digha">Digha</option>
              </select>

              {/* Dropdown for Destination */}
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                style={{
                  display: "block",
                  width: "220px",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              >
                <option value="" disabled>
                  Select Destination
                </option>
                <option value="Bengaluru">Bengaluru</option>
    <option value="Mysore">Mysore</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Goa">Goa</option>
    <option value="Kochi">Kochi</option>
    <option value="Agra">Agra</option>
    <option value="Digha">Digha</option>
              </select>

              {/* Date Picker */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  display: "block",
                  width: "220px",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />

              {/* Number of Passengers */}
              <input
                type="number"
                min="1"
                placeholder="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                style={{
                  display: "block",
                  width: "220px",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                Search
              </button>

              {/* Error Message */}
              {error && (
                <div
                  style={{
                    marginTop: "10px",
                    color: "red",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Display Search Results */}
          <div style={{ margin: "20px auto", maxWidth: "800px" }}>
          <section className="search-results-section">
    <h3>Available Buses</h3>
    {buses.length > 0 ? (
      <ul>
        {buses.map((bus) => (
          <li key={bus._id} style={{ marginBottom: "15px" }}>
            {bus.departure} → {bus.destination} | {bus.time} | ₹{bus.price}
            <button
              onClick={() => handleBooking(bus)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#28a745",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p>No buses found</p>
    )}
  </section>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              boOkBuS Popular Routes and Schedules
            </h2>
            <table
              style={{
                width: "100%",
                border: "2px solid black", // Adds a border to the entire table
                borderCollapse: "collapse", // Ensures there are no double borders
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                  <th style={{ padding: "10px", border: "1px solid black" }}>
                    Popular routes
                  </th>
                  <th style={{ padding: "10px", border: "1px solid black" }}>
                    First and last departures
                  </th>
                  <th style={{ padding: "10px", border: "1px solid black" }}>
                    Average duration
                  </th>
                  <th style={{ padding: "10px", border: "1px solid black" }}>
                    Minimum price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Mysore
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    7:00am — 11:00am
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    3h
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹0.7K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Hyderabad
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    7:25am — 4:45pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    10h 21m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹1.9K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Chennai
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    8:30am — 2:15pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    5h 45m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹1.2K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Mumbai
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    9:15am — 8:45pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    11h 30m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹2.3K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Kochi
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    10:00am — 4:30pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    6h 30m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹1.5K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Goa
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    11:30am — 7:45pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    8h 15m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹1.8K
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    Bengaluru → Coimbatore
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    12:00pm — 4:30pm
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    4h 30m
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ₹0.9K
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Display the search results */}
        </main>
      )}
    </div>
  );
};

export default MainPage;
