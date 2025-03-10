// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";

// interface LoginProps {
//   onLogin: () => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setError("");

//     // Dummy credentials (can be replaced with real authentication)
//     if (username === "neo" && password === "neo@123") {
//       onLogin();
//     } else {
//       setError("❌ Invalid username or password!");
//     }
//   };

//   return (
//     <Card className="p-3">
//       <h3 className="text-center text-success">🔐 Login</h3>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label><strong>Username:</strong></Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mt-2">
//           <Form.Label><strong>Password:</strong></Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-3 w-100">
//           Login
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";

// interface LoginProps {
//   onLogin: () => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setError("");

//     // Dummy credentials (can be replaced with real authentication)
//     if (username === "neo" && password === "neo@123") {
//       onLogin();
//     } else {
//       setError("❌ Invalid username or password!");
//     }
//   };

//   return (
//     <Card className="p-4 shadow-lg w-100" style={{ maxWidth: "400px", margin: "auto" }}>
//       <h3 className="text-center text-success mb-3">🔐 Login</h3>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3 text-center">
//           <Form.Label><strong>Username:</strong></Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 text-center">
//           <Form.Label><strong>Password:</strong></Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-2 w-100">
//           Login
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";

// const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     const storedUser = localStorage.getItem("registeredUser");

//     if (!storedUser) {
//       setError("No registered user found. Please register first.");
//       return;
//     }

//     const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);

//     if (username === storedUsername && password === storedPassword) {
//       localStorage.setItem("isLoggedIn", "true");
//       onLogin();
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <Card className="shadow-lg p-4">
//       <h3 className="text-center text-primary">🔐 Login</h3>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form onSubmit={handleLogin}>
//         <Form.Group className="mb-3">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </Form.Group>

//         <Button variant="success" type="submit" className="w-100">Login</Button>
//       </Form>
//     </Card>
//   );
// };

// export default Login;


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

