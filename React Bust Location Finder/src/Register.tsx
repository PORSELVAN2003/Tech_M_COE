import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

interface RegistrationProps {
  onRegister: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields are required.");
      return;
    }
    localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
    alert("Registration successful! Now login.");
    onRegister();
  };

  return (
    <Card className="p-3">
      <h3 className="text-center">Register</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">Register</Button>
      </Form>
    </Card>
  );
};

export default Registration;

