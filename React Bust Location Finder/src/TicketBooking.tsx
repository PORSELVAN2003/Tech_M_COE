// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";

// interface TicketBookingProps {
//   onBook: () => void;
// }

// const TicketBooking: React.FC<TicketBookingProps> = ({ onBook }) => {
//   const [name, setName] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [seats, setSeats] = useState<number>(1);
//   const [error, setError] = useState<string>("");
//   const [success, setSuccess] = useState<boolean>(false);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     if (!name || !phone || seats < 1) {
//       setError("⚠️ Please fill all details correctly!");
//       return;
//     }

//     // Simulating booking confirmation
//     setSuccess(true);
//     setTimeout(() => {
//       onBook();
//     }, 2000);
//   };

//   return (
//     <Card className="p-3 mt-3">
//       <h3 className="text-center text-success">🎟️ Book Your Ticket</h3>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {success && <Alert variant="success">✅ Ticket Booked Successfully!</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label><strong>Full Name:</strong></Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter full name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mt-2">
//           <Form.Label><strong>Phone Number:</strong></Form.Label>
//           <Form.Control
//             type="tel"
//             placeholder="Enter phone number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mt-2">
//           <Form.Label><strong>Number of Seats:</strong></Form.Label>
//           <Form.Control
//             type="number"
//             value={seats}
//             onChange={(e) => setSeats(parseInt(e.target.value))}
//             min={1}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-3 w-100">
//           Confirm Booking
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default TicketBooking;



import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

interface TicketBookingProps {
  onBook: (passenger: { name: string; phone: string; seats: number }) => void;
}

const TicketBooking: React.FC<TicketBookingProps> = ({ onBook }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [seats, setSeats] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [passenger, setPassenger] = useState<{ name: string; phone: string; seats: number } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !phone || seats < 1) {
      setError("⚠️ Please fill all details correctly!");
      return;
    }

    // Save passenger details
    const passengerDetails = { name, phone, seats };
    setPassenger(passengerDetails);

    // Simulating booking confirmation
    setSuccess(true);
    setTimeout(() => {
      onBook(passengerDetails);
    }, 2000);
  };

  return (
    <Card className="p-3 mt-3">
      <h3 className="text-center text-success">🎟️ Book Your Ticket</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && (
        <Alert variant="success">
          ✅ Ticket Booked Successfully! <br />
          <strong>Name:</strong> {passenger?.name} <br />
          <strong>Phone:</strong> {passenger?.phone} <br />
          <strong>Seats:</strong> {passenger?.seats}
        </Alert>
      )}
      {!success && (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label><strong>Full Name:</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label><strong>Phone Number:</strong></Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label><strong>Number of Seats:</strong></Form.Label>
            <Form.Control
              type="number"
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              min={1}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Confirm Booking
          </Button>
        </Form>
      )}
    </Card>
  );
};

export default TicketBooking;
