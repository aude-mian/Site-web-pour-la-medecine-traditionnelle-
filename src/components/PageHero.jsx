import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMAGES = [
  '/tradi-praticien.jpeg',
  '/feuilles-basilic.jpeg',
  '/main-plantes.jpeg',
  '/plantes1.jpeg',
];

export default function PageHero({ title, subtitle, breadcrumb }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-hero">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`page-hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {breadcrumb && (
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> › {breadcrumb}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
