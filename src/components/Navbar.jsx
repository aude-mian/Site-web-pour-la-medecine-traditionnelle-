import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="MedTrad" style={{ height: '64px', objectFit: 'contain' }} />
        </NavLink>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {[['/', 'Accueil'], ['/decouverte', 'Découverte'], ['/blog', 'Blog'],
            ['/chat', 'Chat'], ['/apropos', 'À propos']].map(([path, label]) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`nav-actions ${open ? 'open' : ''}`}>
          <NavLink to="/login" className="btn btn-outline" onClick={() => setOpen(false)}>Connexion</NavLink>
          <NavLink to="/register" className="btn btn-primary" onClick={() => setOpen(false)}>S'inscrire</NavLink>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
