import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CATEGORIES = ['Tous', 'Phytothérapie', 'Bien-être', 'Tradipraticiens', 'Nutrition', 'Maladies'];

const ARTICLES = [
  { img: '/gingembre.jpg',  cat: 'Phytothérapie',  date: '12 Fév 2026', read: '5', title: 'Les bienfaits du gingembre sur la digestion',         excerpt: "Découvrez comment le gingembre peut améliorer votre santé digestive au quotidien.", author: 'Dr. Aminata Diallo' },
  { img: '/hibiscus.jpg',   cat: 'Bien-être',       date: '5 Fév 2026',  read: '7', title: "Hibiscus : la fleur aux mille vertus",                 excerpt: "L'hibiscus sabdariffa est bien plus qu'une boisson rafraîchissante.",               author: 'Oumar Koné'         },
  { img: '/massage.jpeg',   cat: 'Tradipraticiens', date: '28 Jan 2026', read: '4', title: 'La médecine traditionnelle face à la modernité',        excerpt: 'Un tradipraticien partage sa vision sur la complémentarité des médecines.',         author: 'Fatou Traoré' },
  { img: '/moringa.jpg',    cat: 'Nutrition',       date: '20 Jan 2026', read: '6', title: 'Les super-aliments africains que vous devez connaître', excerpt: 'Du baobab au fonio, découvrez les trésors nutritionnels du continent africain.',    author: 'Mariam Coulibaly'   },
  { img: '/neem.jpg',       cat: 'Maladies',        date: '10 Jan 2026', read: '8', title: 'Paludisme : les remèdes traditionnels complémentaires', excerpt: "Artemisia et autres plantes antipaludéennes dans la tradition africaine.",          author: 'Dr. Kofi Mensah'    },
  { img: '/rituel.jpeg',    cat: 'Bien-être',       date: '3 Jan 2026',  read: '5', title: 'Méditation et plantes : une alliance ancestrale',        excerpt: 'Comment les pratiques méditatives africaines et les plantes aromatiques se complètent.', author: 'Awa Sarr'     },
];

const FEATURED = {
  img: '/moringa.jpg',
  cat: 'Article vedette', date: '15 Mars 2026', read: '10',
  title: "Le moringa : l'arbre miracle de l'Afrique subsaharienne",
  excerpt: "Considéré comme l'un des arbres les plus nutritifs au monde, le moringa recèle des propriétés médicinales exceptionnelles. Découvrez comment nos ancêtres l'utilisaient...",
  author: 'Dr. Aminata Diallo',
};

export default function Blog() {
  const [cat, setCat] = useState('Tous');
  const [search, setSearch] = useState('');

  const filtered = ARTICLES.filter(a => {
    const matchCat = cat === 'Tous' || a.cat === cat;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Accueil</Link> › Blog</div>
          <h1>Blog MedTrad</h1>
          <p>Articles informatifs sur la santé naturelle, les remèdes ancestraux et les conseils de bien-être.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="search-bar">
              <input type="text" placeholder="Rechercher un article..." value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-primary"><Search size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />Rechercher</button>
            </div>
            <div className="filter-bar">
              {CATEGORIES.map(c => (
                <button key={c} className={`filter-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </FadeIn>

          {cat === 'Tous' && !search && (
            <FadeIn delay={100}>
              <div className="card featured-card">
                <div className="featured-img" style={{ backgroundImage: `url(${FEATURED.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="featured-body">
                  <span className="blog-category">{FEATURED.cat}</span>
                  <div className="blog-meta"><span>{FEATURED.date}</span><span className="dot" /><span>{FEATURED.read} min</span><span className="dot" /><span>Par {FEATURED.author}</span></div>
                  <h2 className="featured-title">{FEATURED.title}</h2>
                  <p style={{ color: 'var(--gray-mid)', lineHeight: 1.7 }}>{FEATURED.excerpt}</p>
                  <div style={{ marginTop: '1.2rem' }}>
                    <a href="#" className="btn btn-primary">Lire l'article complet</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          <div className="grid-3">
            {filtered.map(({ img, cat: c, date, read, title, excerpt, author }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-img">
                    <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <span className="blog-category">{c}</span>
                    <div className="blog-meta"><span>{date}</span><span className="dot" /><span>{read} min</span></div>
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                  </div>
                  <div className="card-footer">
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>{author}</span>
                    <a href="#">Lire →</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--gray-mid)', padding: '2rem' }}>Aucun article trouvé.</p>
          )}

          <FadeIn delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem', alignItems: 'center' }}>
              {['‹', '1', '2', '3', '›'].map((p, i) => (
                <button key={i} className={`btn ${p === '1' ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.4rem 0.9rem' }}>{p}</button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
