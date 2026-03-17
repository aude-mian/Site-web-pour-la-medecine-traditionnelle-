import { Link } from 'react-router-dom';

const VALEURS = [
  { icon: '🤝', title: 'Authenticité', desc: 'Nous respectons et préservons l\'intégrité des savoirs traditionnels, sans les dénaturer.' },
  { icon: '🔬', title: 'Rigueur scientifique', desc: 'Nos contenus sont vérifiés et enrichis par des recherches scientifiques.' },
  { icon: '🌍', title: 'Accessibilité', desc: 'Rendre ces connaissances accessibles à tous, sans barrière géographique ou sociale.' },
  { icon: '🌱', title: 'Durabilité', desc: 'Promouvoir l\'usage responsable des plantes dans le respect de l\'environnement.' },
  { icon: '💡', title: 'Innovation', desc: 'Utiliser les technologies numériques pour moderniser la transmission des savoirs.' },
  { icon: '🛡️', title: 'Sécurité', desc: 'Garantir la sécurité des utilisateurs en fournissant des informations claires sur les contre-indications.' },
];

const TEAM = [
  { initials: 'AD', name: 'Dr. Aminata Diallo', role: 'Tradipraticienne en chef & Coordinatrice médicale' },
  { initials: 'OK', name: 'Oumar Koné', role: 'Chercheur en phytothérapie' },
  { initials: 'FT', name: 'Fatou Traoré', role: 'Rédactrice & Responsable blog' },
  { initials: 'KM', name: 'Dr. Kofi Mensah', role: 'Expert en médecine préventive' },
];

const STATS = [['500+', 'Plantes répertoriées'], ['120+', 'Tradipraticiens'], ['8 000+', 'Utilisateurs'], ['15', 'Pays couverts']];

export default function Apropos() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌿</div>
          <h1>À propos de MedTrad</h1>
          <p>Nous valorisons le patrimoine médicinal ancestral africain et le rendons accessible à tous grâce au numérique.</p>
        </div>
      </div>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="tag">Notre mission</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--green-dark)', margin: '0.5rem 0 1rem' }}>Valoriser la médecine traditionnelle africaine</h2>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>MedTrad est née de la conviction que les savoirs ancestraux de la médecine traditionnelle africaine représentent un trésor inestimable pour la santé publique.</p>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>Notre plateforme crée un pont entre la sagesse traditionnelle et la modernité numérique, permettant à chacun d'accéder à ces remèdes naturels.</p>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8 }}>Nous croyons en une médecine complémentaire où tradition et modernité coexistent pour le bien-être de tous.</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg,var(--green-pale),var(--green-border))', borderRadius: 16, padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏥</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {STATS.map(([n, l]) => (
                  <div key={n} style={{ background: 'var(--white)', borderRadius: 10, padding: '1rem', border: '1px solid var(--green-border)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--green-dark)' }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="tag">Nos valeurs</div>
            <h2>Ce qui nous guide</h2>
            <p>Des principes fondamentaux qui orientent chacune de nos actions.</p>
          </div>
          <div className="grid-3">
            {VALEURS.map(v => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="tag">Notre équipe</div>
            <h2>Les personnes derrière MedTrad</h2>
            <p>Une équipe passionnée de professionnels de santé, développeurs et chercheurs.</p>
          </div>
          <div className="grid-4">
            {TEAM.map(m => (
              <div className="team-card" key={m.name}>
                <div className="team-avatar">{m.initials}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green-main))', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.8rem' }}>Notre vision pour demain</h2>
          <p style={{ opacity: 0.9, maxWidth: 620, margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Nous aspirons à devenir la référence numérique de la médecine traditionnelle africaine, un espace où les savoirs ancestraux rencontrent la science moderne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-white btn-lg">Rejoindre la communauté</Link>
            <Link to="/chat" className="btn btn-ghost btn-lg">Consulter un expert</Link>
          </div>
        </div>
      </section>
    </>
  );
}
