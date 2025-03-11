import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";

interface BusFinderProps {
  onSearch: (data: { busNumber: string; location: string; timestamp: string }) => void;
}

const BusFinder: React.FC<BusFinderProps> = ({ onSearch }) => {
  const [busNumber, setBusNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/api.json");

      const bus = response.data.find((b: any) => b.busNumber === busNumber);

      if (bus) {
        onSearch({ busNumber: bus.busNumber, location: bus.location, timestamp: bus.timestamp });
      } else {
        setError("🚫 Bus not found. Please enter a valid bus number.");
      }
    } catch (err) {
      setError("❌ Error fetching bus details. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-3 mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label><strong>Enter Bus Number:</strong></Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g., 101"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          {loading ? <Spinner animation="border" size="sm" /> : "Find Bus"}
        </Button>
      </Form>
      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
    </Card>
  );
};

export default BusFinder;
