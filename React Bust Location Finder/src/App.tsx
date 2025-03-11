
import React, { useState, useEffect } from "react";
import Login from "./Login";
import BusFinder from "./BusFinder";
import TicketBooking from "./TicketBooking";
import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";
import "./App.css";
import Registration from "./Register";

interface BusData {
  busNumber: string;
  location: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [busData, setBusData] = useState<BusData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setBusData(null);
    setBookingConfirmed(false);
  };

  const handleSearch = (data: BusData) => {
    setBusData(data);
    setBookingConfirmed(false);
  };

  const handleBooking = () => {
    setBookingConfirmed(true);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center text-primary">🚌 Bus Location Finder</h2>

              {!isRegistered ? (
                <Registration onRegister={handleRegistration} />
              ) : !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <>
                  <div className="d-flex justify-content-between">
                    <h5 className="text-secondary">Welcome!</h5>
                    <Button variant="danger" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>

                  <BusFinder onSearch={handleSearch} />

                  {busData ? (
                    <Alert variant="info" className="mt-3">
                      <h5>Bus Number: {busData.busNumber}</h5>
                      <p><strong>Location:</strong> {busData.location}</p>
                      <p><strong>Last Updated:</strong> {busData.timestamp}</p>
                      {!bookingConfirmed && (
                        <Button variant="success" className="mt-2" onClick={handleBooking}>
                          Book Ticket 🎟️
                        </Button>
                      )}
                    </Alert>
                  ) : (
                    <p className="text-center text-muted mt-3">🔍 Search for a bus to see details.</p>
                  )}

                  {bookingConfirmed && <TicketBooking onBook={handleBooking} />}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;


