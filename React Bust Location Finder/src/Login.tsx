import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      setError("No registered user found. Please register first.");
      return;
    }

    const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);

    if (username === storedUsername && password === storedPassword) {
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Card className="p-3">
      <h3 className="text-center">Login</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">Login</Button>
      </Form>
    </Card>
  );
};

export default Login;

