import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookMarked, MessageCircle, Newspaper, Search, ShieldCheck, Globe,
  Stethoscope, Sprout, ChevronDown,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const HERO_IMAGES = [
  '/tradi-praticien.jpeg',
  '/feuilles-basilic.jpeg',
  '/main-plantes.jpeg',
  '/plantes1.jpeg',
];

const plants = [
  { img: '/moringa.jpg',    name: 'Moringa oleifera',     desc: 'Riche en vitamines et minéraux, renforce le système immunitaire et lutte contre la malnutrition.',                tags: ['Immunité', 'Nutrition'],   origin: "Afrique de l'Ouest" },
  { img: '/neem.jpg',       name: 'Neem (Azadirachta)',    desc: 'Antibactérien et antiparasitaire naturel utilisé depuis des millénaires.',                                        tags: ['Antiparasitaire', 'Peau'], origin: 'Inde / Afrique' },
  { img: '/kinkeliba.jpg',  name: 'Kinkeliba (Combretum)', desc: "Très populaire en Afrique de l'Ouest, reconnu pour ses propriétés détoxifiantes.",                               tags: ['Foie', 'Détox'],           origin: 'Sénégal / Mali' },
];

const articles = [
  { img: '/gingembre.jpg', cat: 'Phytothérapie',  date: '12 Fév 2026', read: '5 min', title: 'Les bienfaits du gingembre sur la digestion',      excerpt: "Découvrez comment le gingembre peut améliorer votre santé digestive au quotidien.", author: 'Dr. Aminata Diallo' },
  { img: '/hibiscus.jpg',  cat: 'Bien-être',       date: '5 Fév 2026',  read: '7 min', title: "Hibiscus : la fleur aux mille vertus",              excerpt: "L'hibiscus sabdariffa est bien plus qu'une boisson rafraîchissante.",               author: 'Oumar Koné'         },
  { img: '/massage.jpeg',  cat: 'Tradipraticiens', date: '28 Jan 2026', read: '4 min', title: 'La médecine traditionnelle face à la modernité',     excerpt: 'Un tradipraticien partage sa vision sur la complémentarité des médecines.',         author: 'Fatou Traoré'       },
];

const features = [
  { Icon: BookMarked,    title: 'Bibliothèque de plantes', desc: 'Accédez à une base de données complète de plantes médicinales avec leurs propriétés et usages.' },
  { Icon: MessageCircle, title: 'Chat avec les experts',   desc: 'Discutez directement avec des tradipraticiens qualifiés pour des conseils personnalisés.' },
  { Icon: Newspaper,     title: 'Blog informatif',         desc: 'Lisez des articles rédigés par des experts sur les pratiques et remèdes traditionnels.' },
  { Icon: Search,        title: 'Recherche avancée',       desc: 'Trouvez rapidement les remèdes adaptés à vos besoins.' },
  { Icon: ShieldCheck,   title: 'Informations fiables',    desc: 'Toutes nos informations sont vérifiées par des spécialistes reconnus.' },
  { Icon: Globe,         title: 'Savoirs africains',       desc: 'Valorisation du patrimoine médicinal africain et des pratiques ancestrales.' },
];

export default function Accueil() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero hero-slideshow">
        {/* Images en arrière-plan */}
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Overlay sombre pour lisibilité */}
        <div className="hero-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge"><Sprout size={16} /> Plateforme de médecine traditionnelle</div>
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

          {/* Indicateurs de slides */}
          <div className="hero-dots">
            {HERO_IMAGES.map((_, i) => (
              <button key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <ChevronDown size={20} />
          <span>Défiler</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <div className="tag">Nos services</div>
              <h2>Tout ce dont vous avez besoin</h2>
              <p>Une plateforme complète pour explorer, apprendre et consulter des experts.</p>
            </div>
          </FadeIn>
          <div className="timeline-blocks">
            {features.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 130}>
                <div className="timeline-block">
                  <div className="timeline-num">0{i + 1}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
            {plants.map(({ img, name, desc, tags, origin }, i) => (
              <FadeIn key={name} delay={i * 120}>
                <div className="card plant-card" style={{ height: '100%' }}>
                  <div className="card-img">
                    <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {tags.map(t => <span className="badge badge-green" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>Origine : {origin}</span>
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
            {articles.map(({ img, cat, date, read, title, excerpt, author }, i) => (
              <FadeIn key={title} delay={i * 120}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-img">
                    <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <span className="blog-category">{cat}</span>
                    <div className="blog-meta"><span>{date}</span><span className="dot" /><span>{read} de lecture</span></div>
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>Par {author}</span>
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

      <section className="section" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green-main))', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Stethoscope size={56} color="rgba(255,255,255,0.9)" strokeWidth={1.4} />
              </div>
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
