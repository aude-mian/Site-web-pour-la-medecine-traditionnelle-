import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <Link to="/" className="logo">🌿 Med<span>Trad</span></Link>
          <p>Médecine traditionnelle africaine</p>
        </div>

        <h2>Bon retour !</h2>
        <p className="subtitle">Connectez-vous à votre compte MedTrad</p>

        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label>Adresse e-mail</label>
            <input type="email" name="email" placeholder="vous@exemple.com" value={form.email} onChange={handle} />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" name="password" placeholder="Votre mot de passe" value={form.password} onChange={handle} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
              <input type="checkbox" name="remember" checked={form.remember} onChange={handle} style={{ accentColor: 'var(--green-main)' }} />
              Se souvenir de moi
            </label>
            <a href="#" style={{ color: 'var(--green-main)', fontWeight: 600 }}>Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
        </form>

        <div className="divider">ou continuer avec</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
          <button className="btn btn-outline" style={{ justifyContent: 'center' }}>🌐 Google</button>
          <button className="btn btn-outline" style={{ justifyContent: 'center' }}>📘 Facebook</button>
        </div>

        <div className="auth-footer">
          Pas encore de compte ? <Link to="/register">S'inscrire gratuitement</Link>
        </div>
      </div>
    </div>
  );
}
