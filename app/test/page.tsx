"use client"

// components/Form.tsx
import { useState } from 'react';

const Form = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/test/formapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first_name, last_name, city, state, specialty, phone_no, email }),
    });

    const result = await response.json();

    if (result.success) {
      alert('Data submitted successfully!');
      setFirstName('');
      setLastName('');
      setCity('');
      setState('');
      setSpecialty('');
      setPhoneNo('');
      setEmail('');
    } else {
      alert('Error submitting data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="State"
        required
      />
      <input
        type="text"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        placeholder="Specialty"
        required
      />
      <input
        type="text"
        value={phone_no}
        onChange={(e) => setPhoneNo(e.target.value)}
        placeholder="Phone No"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;