import { useState } from 'react';
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration successful: ${email}`);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register Your Adventurer Account</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Enter the Community Center</button>
      </form>
    </div>
  );
}
