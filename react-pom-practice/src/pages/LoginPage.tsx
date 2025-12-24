import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!login(email, password)) {
      setError('Invalid credentials');
      return;
    }

    onLogin();
    navigate('/dashboard');
  };

  return (
    <div data-testid="login-page">
      <h1>Login</h1>

      <input
        data-testid="login-email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        data-testid="login-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button data-testid="login-submit" onClick={handleSubmit}>
        Sign In
      </button>

      {error && <p data-testid="login-error">{error}</p>}
    </div>
  );
}
