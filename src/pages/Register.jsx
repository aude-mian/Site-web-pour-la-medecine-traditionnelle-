import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image.png';

export default function Register() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', role: '', password: '', confirm: '', cgv: false });

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card wide">
        <div className="auth-logo">
          <Link to="/"><img src={logo} alt="MedTrad" style={{ height: 52, objectFit: 'contain' }} /></Link>
          <p>Médecine traditionnelle africaine</p>
        </div>

        <h2>Créer un compte</h2>
        <p className="subtitle">Rejoignez la communauté MedTrad gratuitement</p>

        <form onSubmit={e => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Prénom</label>
              <input type="text" name="prenom" placeholder="Votre prénom" value={form.prenom} onChange={handle} />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" name="nom" placeholder="Votre nom" value={form.nom} onChange={handle} />
            </div>
          </div>

          <div className="form-group">
            <label>Adresse e-mail</label>
            <input type="email" name="email" placeholder="vous@exemple.com" value={form.email} onChange={handle} />
          </div>

          <div className="form-group">
            <label>Je suis</label>
            <select name="role" value={form.role} onChange={handle}>
              <option value="">-- Choisissez votre profil --</option>
              <option value="client">Utilisateur (client)</option>
              <option value="tradipraticien">Tradipraticien</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" name="password" placeholder="Minimum 8 caractères" value={form.password} onChange={handle} />
          </div>

          <div className="form-group">
            <label>Confirmer le mot de passe</label>
            <input type="password" name="confirm" placeholder="Répétez votre mot de passe" value={form.confirm} onChange={handle} />
          </div>

          <div style={{ marginBottom: '1.2rem', fontSize: '0.84rem', color: 'var(--gray-mid)' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', lineHeight: 1.5 }}>
              <input type="checkbox" name="cgv" checked={form.cgv} onChange={handle} style={{ accentColor: 'var(--green-main)', marginTop: 2, flexShrink: 0 }} />
              J'accepte les <a href="#" style={{ color: 'var(--green-main)', fontWeight: 600 }}>conditions d'utilisation</a> et la <a href="#" style={{ color: 'var(--green-main)', fontWeight: 600 }}>politique de confidentialité</a>.
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Créer mon compte</button>
        </form>

        <div className="divider">ou s'inscrire avec</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
          <button className="btn btn-outline" style={{ justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
          <button className="btn btn-outline" style={{ justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </button>
        </div>

        <div className="auth-footer">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </div>
      </div>
    </div>
  );
}
