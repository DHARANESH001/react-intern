import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState([]);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRole([...role, value]);
    } else {
      setRole(role.filter((r) => r !== value));
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password && role.length > 0) {
      navigate('/home');
      alert(`Signup successful!\nEmail: ${email}\nRole: ${role.join(', ')}`);
    } else {
      alert('Please fill all fields and select at least one role');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />

        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />

        <div style={{ marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            value="user" 
            checked={role.includes('user')}
            onChange={handleRoleChange}
            style={{ marginRight: '5px' }}
          />
          <label>User</label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            value="admin" 
            checked={role.includes('admin')}
            onChange={handleRoleChange}
            style={{ marginRight: '5px' }}
          />
          <label>Admin</label>
        </div>
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Signup
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Already have an account? <Link to="/" style={{ color: '#007bff' }}>Login</Link>
      </p>
    </div>
  );
}

export default Signup;
