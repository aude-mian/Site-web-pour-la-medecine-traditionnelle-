import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHero from '../components/PageHero';

const INFOS = [
  { Icon: Mail,    label: 'Email',    value: 'contact@medtrad.com' },
  { Icon: Phone,   label: 'Téléphone', value: '+225 07 00 00 00 00' },
  { Icon: MapPin,  label: 'Adresse',  value: 'Abidjan, Côte d\'Ivoire' },
];

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, une suggestion ? Notre équipe vous répond dans les plus brefs délais."
        breadcrumb="Contact"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Infos */}
            <FadeIn>
              <div className="contact-infos">
                <div className="tag" style={{ marginBottom: '0.8rem' }}>Nous joindre</div>
                <h2 className="contact-title">Parlons ensemble</h2>
                <p className="contact-intro">
                  Que vous soyez tradipraticien, chercheur ou simple curieux, nous sommes là pour vous accompagner.
                </p>
                <div className="contact-info-list">
                  {INFOS.map(({ Icon, label, value }) => (
                    <div className="contact-info-item" key={label}>
                      <div className="contact-info-icon"><Icon size={20} /></div>
                      <div>
                        <div className="contact-info-label">{label}</div>
                        <div className="contact-info-value">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Formulaire */}
            <FadeIn delay={150}>
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Nous vous répondrons dans les 48h.</p>
                  <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: '1.2rem' }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom complet</label>
                      <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" required />
                    </div>
                    <div className="form-group">
                      <label>Adresse email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Sujet</label>
                    <input type="text" name="sujet" value={form.sujet} onChange={handleChange} placeholder="De quoi s'agit-il ?" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." rows={6} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Envoyer le message</button>
                </form>
              )}
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
