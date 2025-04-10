import { useState } from 'react';
import './Login.css';

export default function Login({ onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace with actual API call
      console.log('Login with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Connexion réussie (simulation)');
    } catch (err) {
      setError(err.message || 'Échec de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-scene">
      <h2>Connexion</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="primary-button">
          {loading ? 'Connexion en cours...' : 'Se connecter'}
        </button>
      </form>

      <div className="auth-switch">
        Pas de compte ?{' '}
        <button onClick={onSwitchToSignup} className="text-button">
          Créer un compte
        </button>
      </div>
    </div>
  );
}