import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">🌿 Med<span>Trad</span></Link>
            <p>La plateforme numérique dédiée à la valorisation de la médecine traditionnelle africaine.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {[['/', 'Accueil'], ['/decouverte', 'Découverte'], ['/blog', 'Blog'],
                ['/chat', 'Chat'], ['/apropos', 'À propos']].map(([path, label]) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Compte</h4>
            <ul>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/register">Inscription</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">contact@medtrad.com</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MedTrad. Tous droits réservés.</span>
          <span>Fait avec 💚 pour la médecine traditionnelle</span>
        </div>
      </div>
    </footer>
  );
}
