import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signup', {
        name,
        email,
        password,
      });
      setResponseMessage(response.data.message);
      setError(''); // Reset error state if successful
    } catch (error) {
      setError(error.response.data.message);
      setResponseMessage(''); // Clear response message if there's an error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {error && <div className="error">{error}</div>}
      {responseMessage && (
        <div className="success">
          <p>{responseMessage}</p>
          <button onClick={() => setResponseMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
