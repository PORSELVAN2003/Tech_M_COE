// // import React, { useState } from "react";
// // import { Form, Button, Card, Alert } from "react-bootstrap";

// // const Register: React.FC<{ onRegister: () => void }> = ({ onRegister }) => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleRegister = (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     if (username.trim() === "" || password.trim() === "") {
// //       setError("Username and password are required.");
// //       return;
// //     }

// //     localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
// //     alert("Registration successful! Please login.");
// //     onRegister();
// //   };

// //   return (
// //     <Card className="shadow-lg p-4">
// //       <h3 className="text-center text-primary">📝 Register</h3>
// //       {error && <Alert variant="danger">{error}</Alert>}
// //       <Form onSubmit={handleRegister}>
// //         <Form.Group className="mb-3">
// //           <Form.Label>Username</Form.Label>
// //           <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //           <Form.Label>Password</Form.Label>
// //           <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //         </Form.Group>

// //         <Button variant="primary" type="submit" className="w-100">Register</Button>
// //       </Form>
// //     </Card>
// //   );
// // };

// // export default Register;


// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";

// const Register: React.FC<{ onRegister: () => void }> = ({ onRegister }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
//       setError("All fields are required.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // Store user details in localStorage
//     localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
//     setSuccess("Registration successful! Redirecting to login...");
    
//     setTimeout(() => {
//       onRegister();
//     }, 1500);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="shadow-lg p-4" style={{ width: "400px" }}>
//         <h3 className="text-center text-primary">📝 Register</h3>

//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">{success}</Alert>}

//         <Form onSubmit={handleRegister}>
//           <Form.Group className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control 
//               type="text" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//               placeholder="Enter username" 
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control 
//               type="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               placeholder="Enter password" 
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control 
//               type="password" 
//               value={confirmPassword} 
//               onChange={(e) => setConfirmPassword(e.target.value)} 
//               placeholder="Confirm password" 
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100">Register</Button>
//         </Form>

//         <p className="mt-3 text-center">
//           Already have an account? <a href="#" onClick={onRegister}>Login</a>
//         </p>
//       </Card>
//     </div>
//   );
// };

// export default Register;


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

