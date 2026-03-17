import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="logo">🌿 Med<span>Trad</span></Link>
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
          <button className="btn btn-outline" style={{ justifyContent: 'center' }}>🌐 Google</button>
          <button className="btn btn-outline" style={{ justifyContent: 'center' }}>📘 Facebook</button>
        </div>

        <div className="auth-footer">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </div>
      </div>
    </div>
  );
}
