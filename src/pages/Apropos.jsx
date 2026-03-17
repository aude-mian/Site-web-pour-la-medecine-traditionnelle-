import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHero from '../components/PageHero';

const VALEURS = [
  { img: '/moringa.jpg',   title: 'Authenticité',         desc: "Nous respectons et préservons l'intégrité des savoirs traditionnels, sans les dénaturer ni les réduire à de simples anecdotes." },
  { img: '/neem.jpg',      title: 'Rigueur scientifique', desc: 'Nos contenus sont vérifiés et enrichis par des recherches scientifiques pour garantir des informations exactes et à jour.' },
  { img: '/kinkeliba.jpg', title: 'Accessibilité',        desc: 'Rendre ces connaissances accessibles à tous, sans barrière géographique ou sociale, est au cœur de notre mission.' },
  { img: '/baobab.webp',   title: 'Durabilité',           desc: "Promouvoir l'usage responsable des plantes dans le respect de l'environnement et des écosystèmes fragiles." },
  { img: '/curcuma.jpg',   title: 'Innovation',           desc: 'Utiliser les technologies numériques pour moderniser la transmission des savoirs et toucher les nouvelles générations.' },
  { img: '/aloe.jpg',      title: 'Sécurité',             desc: "Garantir la sécurité des utilisateurs en fournissant des informations claires sur les contre-indications et les dosages." },
];

const TEAM = [
  { initials: 'AD', name: 'Dr. Aminata Diallo', role: 'Tradipraticienne en chef & Coordinatrice médicale' },
  { initials: 'OK', name: 'Oumar Koné',         role: 'Chercheur en phytothérapie' },
  { initials: 'FT', name: 'Fatou Traoré',       role: 'Rédactrice & Responsable blog' },
  { initials: 'KM', name: 'Dr. Kofi Mensah',    role: 'Expert en médecine préventive' },
];

const STATS = [['500+', 'Plantes répertoriées'], ['120+', 'Tradipraticiens'], ['8 000+', 'Utilisateurs'], ['15', 'Pays couverts']];

export default function Apropos() {
  return (
    <>
      <PageHero
        title="À propos de MedTrad"
        subtitle="Nous valorisons le patrimoine médicinal ancestral africain et le rendons accessible à tous grâce au numérique."
        breadcrumb="À propos"
      />

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="tag">Notre mission</div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--green-dark)', margin: '0.5rem 0 1rem' }}>Valoriser la médecine traditionnelle africaine</h2>
                <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>MedTrad est née de la conviction que les savoirs ancestraux de la médecine traditionnelle africaine représentent un trésor inestimable pour la santé publique.</p>
                <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>Notre plateforme crée un pont entre la sagesse traditionnelle et la modernité numérique, permettant à chacun d'accéder à ces remèdes naturels.</p>
                <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8 }}>Nous croyons en une médecine complémentaire où tradition et modernité coexistent pour le bien-être de tous.</p>
              </div>
              <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
                <img src="/kinkeliba.jpg" alt="Plantes médicinales" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,92,56,0.85) 0%, transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', width: '100%' }}>
                    {STATS.map(([n, l]) => (
                      <div key={n} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '0.8rem', textAlign: 'center', color: 'var(--white)' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{n}</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className="accordion-header">
              <div>
                <div className="accordion-tag">Nos valeurs</div>
                <h2 className="accordion-title">Ce qui nous guide</h2>
              </div>
            </div>
          </FadeIn>
          <div className="accordion-list">
            {VALEURS.map(({ img, title, desc }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="accordion-item">
                  <div className="accordion-row">
                    <span className="accordion-num">0{i + 1}</span>
                    <span className="accordion-item-title">{title}</span>
                    <span className="accordion-arrow">→</span>
                  </div>
                  <div className="accordion-body">
                    <p>{desc}</p>
                    <img src={img} alt={title} className="accordion-img" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="tag">Notre équipe</div>
              <h2>Les personnes derrière MedTrad</h2>
              <p>Une équipe passionnée de professionnels de santé, développeurs et chercheurs.</p>
            </div>
          </FadeIn>
          <div className="grid-4">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 100}>
                <div className="team-card">
                  <div className="team-avatar">{m.initials}</div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green-main))', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Sparkles size={56} color="rgba(255,255,255,0.9)" strokeWidth={1.4} />
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.8rem' }}>Notre vision pour demain</h2>
              <p style={{ opacity: 0.9, maxWidth: 620, margin: '0 auto 2rem', lineHeight: 1.8 }}>
                Nous aspirons à devenir la référence numérique de la médecine traditionnelle africaine, un espace où les savoirs ancestraux rencontrent la science moderne.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/register" className="btn btn-white btn-lg">Rejoindre la communauté</Link>
                <Link to="/chat" className="btn btn-ghost btn-lg">Consulter un expert</Link>
              </div>
            </>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
