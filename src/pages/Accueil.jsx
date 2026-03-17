import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const plants = [
  { icon: '🌿', name: 'Moringa oleifera', desc: 'Riche en vitamines et minéraux, renforce le système immunitaire et lutte contre la malnutrition.', tags: ['Immunité', 'Nutrition'], origin: 'Afrique de l\'Ouest' },
  { icon: '🍃', name: 'Neem (Azadirachta)', desc: 'Antibactérien et antiparasitaire naturel utilisé depuis des millénaires.', tags: ['Antiparasitaire', 'Peau'], origin: 'Inde / Afrique' },
  { icon: '🌱', name: 'Kinkeliba (Combretum)', desc: 'Très populaire en Afrique de l\'Ouest, reconnu pour ses propriétés détoxifiantes.', tags: ['Foie', 'Détox'], origin: 'Sénégal / Mali' },
];

const articles = [
  { icon: '📖', color: '#d4f0e0,#a8d5b5', cat: 'Phytothérapie', date: '12 Fév 2026', read: '5 min', title: 'Les bienfaits du gingembre sur la digestion', excerpt: 'Découvrez comment le gingembre peut améliorer votre santé digestive au quotidien.', author: 'Dr. Aminata Diallo' },
  { icon: '🌺', color: '#e8f5e9,#c8e6c9', cat: 'Bien-être', date: '5 Fév 2026', read: '7 min', title: 'Hibiscus : la fleur aux mille vertus', excerpt: 'L\'hibiscus sabdariffa est bien plus qu\'une boisson rafraîchissante.', author: 'Oumar Koné' },
  { icon: '🍵', color: '#f1f8e9,#dcedc8', cat: 'Tradipraticiens', date: '28 Jan 2026', read: '4 min', title: 'La médecine traditionnelle face à la modernité', excerpt: 'Un tradipraticien partage sa vision sur la complémentarité des médecines.', author: 'Fatou Traoré' },
];

const features = [
  { icon: '🌿', title: 'Bibliothèque de plantes', desc: 'Accédez à une base de données complète de plantes médicinales avec leurs propriétés et usages.' },
  { icon: '💬', title: 'Chat avec les experts', desc: 'Discutez directement avec des tradipraticiens qualifiés pour des conseils personnalisés.' },
  { icon: '📰', title: 'Blog informatif', desc: 'Lisez des articles rédigés par des experts sur les pratiques et remèdes traditionnels.' },
  { icon: '🔍', title: 'Recherche avancée', desc: 'Trouvez rapidement les remèdes adaptés à vos besoins.' },
  { icon: '🛡️', title: 'Informations fiables', desc: 'Toutes nos informations sont vérifiées par des spécialistes reconnus.' },
  { icon: '🌍', title: 'Savoirs africains', desc: 'Valorisation du patrimoine médicinal africain et des pratiques ancestrales.' },
];

export default function Accueil() {
  return (
    <>
      {/* HERO — animé via CSS heroSlide (pas besoin d'IntersectionObserver, déjà visible) */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🌱 Plateforme de médecine traditionnelle</div>
          <h1>Découvrez les <span className="accent">remèdes naturels</span><br />de nos ancêtres</h1>
          <p>MedTrad vous connecte aux savoirs ancestraux de la médecine traditionnelle. Explorez les plantes médicinales, lisez nos articles et discutez avec des tradipraticiens.</p>
          <div className="hero-actions">
            <Link to="/decouverte" className="btn btn-white btn-lg">Explorer les plantes</Link>
            <Link to="/chat" className="btn btn-ghost btn-lg">Consulter un tradipraticien</Link>
          </div>
          <div className="hero-stats">
            {[['500+', 'Plantes répertoriées'], ['120+', 'Tradipraticiens'], ['8 000+', 'Utilisateurs actifs'], ['300+', 'Articles publiés']].map(([n, l]) => (
              <div className="stat" key={n}><div className="number">{n}</div><div className="label">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="tag">Nos services</div>
              <h2>Tout ce dont vous avez besoin</h2>
              <p>Une plateforme complète pour explorer, apprendre et consulter des experts.</p>
            </div>
          </FadeIn>
          <div className="features-grid">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 80}>
                <div className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTES EN VEDETTE */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="tag">Découverte</div>
              <h2>Plantes médicinales en vedette</h2>
              <p>Quelques plantes essentielles de notre bibliothèque traditionnelle.</p>
            </div>
          </FadeIn>
          <div className="grid-3">
            {plants.map((p, i) => (
              <FadeIn key={p.name} delay={i * 120}>
                <div className="card plant-card" style={{ height: '100%' }}>
                  <div className="card-img"><span style={{ fontSize: '4rem' }}>{p.icon}</span></div>
                  <div className="card-body">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {p.tags.map(t => <span className="badge badge-green" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>Origine : {p.origin}</span>
                    <Link to="/decouverte">Voir plus →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={360}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/decouverte" className="btn btn-primary btn-lg">Voir toutes les plantes</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLES RÉCENTS */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="tag">Blog</div>
              <h2>Articles récents</h2>
              <p>Restez informés des dernières découvertes en médecine traditionnelle.</p>
            </div>
          </FadeIn>
          <div className="grid-3">
            {articles.map((a, i) => (
              <FadeIn key={a.title} delay={i * 120}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-img" style={{ background: `linear-gradient(135deg,${a.color})`, fontSize: '2.5rem' }}>{a.icon}</div>
                  <div className="card-body">
                    <span className="blog-category">{a.cat}</span>
                    <div className="blog-meta"><span>{a.date}</span><span className="dot" /><span>{a.read} de lecture</span></div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>Par {a.author}</span>
                    <Link to="/blog">Lire →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={360}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/blog" className="btn btn-outline btn-lg">Voir tous les articles</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green-main))', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍⚕️</div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.8rem' }}>Consultez un tradipraticien</h2>
              <p style={{ opacity: 0.9, maxWidth: 500, margin: '0 auto 2rem' }}>Obtenez des conseils personnalisés de nos tradipraticiens qualifiés via notre messagerie sécurisée.</p>
              <Link to="/register" className="btn btn-white btn-lg">Créer un compte gratuit</Link>
            </>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
