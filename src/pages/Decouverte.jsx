import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const PLANTS = [
  { img: '/moringa.jpg',   name: 'Moringa oleifera',   desc: "Renforce l'immunité, riche en vitamines A, C et fer.",                         tags: ['Immunité', 'Nutrition'],     origin: "Afrique de l'Ouest" },
  { img: '/neem.jpg',      name: 'Neem (Azadirachta)', desc: 'Antibactérien, antiparasitaire, excellent pour la peau.',                       tags: ['Peau', 'Antiparasitaire'],   origin: 'Inde / Afrique' },
  { img: '/kinkeliba.jpg', name: 'Kinkeliba',           desc: 'Détoxifiant hépatique, régule la glycémie.',                                    tags: ['Foie', 'Détox'],             origin: 'Sénégal / Mali' },
  { img: '/hibiscus.jpg',  name: 'Hibiscus sabdariffa', desc: 'Riche en antioxydants, régule la tension artérielle.',                         tags: ['Tension', 'Antioxydant'],    origin: 'Afrique tropicale' },
  { img: '/gingembre.jpg', name: 'Gingembre',           desc: "Anti-inflammatoire, améliore la digestion et réduit les nausées.",             tags: ['Digestion', 'Inflammation'], origin: 'Asie / Afrique' },
  { img: '/baobab.webp',   name: 'Baobab',              desc: 'Super-aliment, source de vitamine C, calcium et fibres.',                       tags: ['Nutrition', 'Énergie'],      origin: 'Afrique subsaharienne' },
  { img: '/aloe.jpg',      name: 'Aloe vera',           desc: 'Cicatrisant, hydratant, soulage les brûlures et irritations.',                 tags: ['Peau', 'Cicatrisant'],       origin: 'Afrique du Nord' },
  { img: '/curcuma.jpg',   name: 'Curcuma',             desc: 'Puissant anti-inflammatoire naturel, protège le foie.',                        tags: ['Inflammation', 'Foie'],      origin: 'Asie du Sud' },
];

const FILTERS = ['Toutes les plantes', 'Immunité', 'Digestion', 'Peau', 'Antiparasitaire', 'Détox', 'Douleurs', 'Bien-être'];

const REMEDES = [
  { img: '/tissane-kinkeliba.jpg', name: 'Tisane de kinkeliba', desc: 'Infusion quotidienne pour détoxifier le foie et réguler la glycémie. Faire bouillir les feuilles 15 minutes.', tags: ['Facile', 'Quotidien'],  time: '15 min' },
  { img: '/huile-neem.png',        name: "Huile de neem",       desc: "Application topique contre les parasites cutanés, l'eczéma et les infections fongiques.",                      tags: ['Usage externe'],        time: 'Direct' },
  { img: '/bissap.jpeg',           name: 'Jus de bissap',       desc: "Boisson à base de fleurs d'hibiscus, riche en antioxydants, aide à réduire la tension.",                       tags: ['Boisson', 'Quotidien'], time: '10 min' },
];

const PRATIQUES = [
  { img: '/massage.jpeg',    title: 'Massage traditionnel',    desc: 'Techniques ancestrales avec huiles médicinales pour soulager douleurs et tensions.' },
  { img: '/bain-vapeur.jpeg',title: 'Bains de vapeur',         desc: 'Inhalations et bains de vapeur aux plantes aromatiques pour les voies respiratoires.' },
  { img: '/rituel.jpeg',     title: 'Rituels de purification', desc: 'Pratiques ancestrales de purification physique et spirituelle.' },
];

export default function Decouverte() {
  const [filter, setFilter] = useState('Toutes les plantes');
  const [search, setSearch] = useState('');

  const filtered = PLANTS.filter(p => {
    const matchFilter = filter === 'Toutes les plantes' || p.tags.some(t => t === filter);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Accueil</Link> › Découverte</div>
          <h1>Découverte</h1>
          <p>Explorez notre bibliothèque de plantes médicinales, remèdes naturels et pratiques thérapeutiques.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="search-bar">
              <input type="text" placeholder="Rechercher une plante, un remède..." value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-primary"><Search size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />Rechercher</button>
            </div>
            <div className="filter-bar">
              {FILTERS.map(f => (
                <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--green-dark)', marginBottom: '1.2rem' }}>Plantes médicinales</h2>
          </FadeIn>

          <div className="grid-4">
            {filtered.map(({ img, Icon, bg, name, desc, tags, origin }, i) => (
              <FadeIn key={name} delay={i * 70}>
                <div className="card plant-card" style={{ height: '100%' }}>
                  <div className="card-img">
                    {img
                      ? <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon size={56} color="rgba(255,255,255,0.9)" strokeWidth={1.4} />
                        </div>
                    }
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {tags.map(t => <span className="badge badge-green" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-mid)' }}>{origin}</span>
                    <a href="#">Détails →</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--gray-mid)', padding: '2rem' }}>Aucune plante trouvée.</p>
          )}

          <FadeIn style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--green-dark)', marginBottom: '1.2rem' }}>Remèdes naturels populaires</h2>
          </FadeIn>
          <div className="grid-3">
            {REMEDES.map(({ img, name, desc, tags, time }, i) => (
              <FadeIn key={name} delay={i * 100}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-img">
                    <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {tags.map(t => <span className="badge badge-green" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>{time} de préparation</span>
                    <a href="#">Recette →</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--green-dark)', marginBottom: '1.2rem' }}>Pratiques thérapeutiques</h2>
          </FadeIn>
          <div className="grid-3">
            {PRATIQUES.map(({ img, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="card" style={{ height: '100%', overflow: 'hidden' }}>
                  <div className="card-img">
                    <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
