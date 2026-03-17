import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const PRATICIENS = [
  { initials: 'AD', name: 'Dr. Aminata Diallo', spec: 'Phytothérapie', online: true, preview: 'Bonjour, comment puis-je vous aider ?' },
  { initials: 'OK', name: 'Oumar Koné', spec: 'Médecine douce', online: true, preview: 'Je vous recommande le moringa...' },
  { initials: 'FT', name: 'Fatou Traoré', spec: 'Phytothérapie', online: false, preview: 'Voici la recette de la tisane...' },
  { initials: 'KM', name: 'Dr. Kofi Mensah', spec: 'Antiparasitaires', online: false, preview: 'Les propriétés de l\'artémisia...' },
  { initials: 'MC', name: 'Mariam Coulibaly', spec: 'Nutrition naturelle', online: true, preview: 'Prenez 2 cuillères de poudre...' },
  { initials: 'AS', name: 'Awa Sarr', spec: 'Bien-être', online: false, preview: 'N\'oubliez pas de bien sécher...' },
];

const INIT_MESSAGES = [
  { text: 'Bonjour ! Je suis Dr. Aminata Diallo, tradipraticienne spécialisée en phytothérapie. Comment puis-je vous aider aujourd\'hui ?', time: '09:15', sent: false },
  { text: 'Bonjour Docteure ! Je souffre de problèmes digestifs fréquents. Quels remèdes me conseilleriez-vous ?', time: '09:17', sent: true },
  { text: 'Je vous recommande une tisane de gingembre frais. Faites bouillir 3-4 tranches dans 500ml d\'eau pendant 10 minutes, puis buvez après les repas. 🍵', time: '09:19', sent: false },
  { text: 'Vous pouvez aussi essayer une infusion de feuilles de kinkeliba, très efficace pour détoxifier et améliorer la digestion.', time: '09:20', sent: false },
  { text: 'Principalement après les repas. Est-ce que le gingembre est sans danger à long terme ?', time: '09:22', sent: true },
  { text: 'Oui, le gingembre est généralement bien toléré (max 4g/jour). Si vous prenez des anticoagulants, consultez d\'abord votre médecin. Je vous prépare une fiche complète ! 📋', time: '09:24', sent: false },
];

export default function Chat() {
  const [active, setActive] = useState(0);
  const [messages, setMessages] = useState(INIT_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    setMessages(m => [...m, { text, time: now, sent: true }]);
    setInput('');
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Accueil</Link> › Chat</div>
          <h1>💬 Chat avec les tradipraticiens</h1>
          <p>Discutez directement avec des professionnels de la médecine traditionnelle.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="chat-layout">
              <div className="chat-sidebar">
                <div className="chat-sidebar-header">💬 Conversations</div>
                <div className="chat-search">
                  <input type="text" placeholder="Rechercher..." />
                </div>
                <div className="chat-list">
                  {PRATICIENS.map((p, i) => (
                    <div key={p.name} className={`chat-item ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
                      <div className="avatar" style={{ width: 42, height: 42, fontSize: '0.9rem' }}>{p.initials}</div>
                      <div className="chat-item-info">
                        <div className="chat-item-name">{p.name}</div>
                        <div className="chat-item-preview">{p.preview}</div>
                      </div>
                      <div className={p.online ? 'online-dot' : 'offline-dot'} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="chat-main">
                <div className="chat-header">
                  <div className="avatar" style={{ width: 46, height: 46, fontSize: '1rem' }}>{PRATICIENS[active].initials}</div>
                  <div className="chat-header-info">
                    <h3>{PRATICIENS[active].name}</h3>
                    <p>Tradipraticien – {PRATICIENS[active].spec}</p>
                  </div>
                  <div className="chat-status">
                    <span style={{ width: 8, height: 8, background: PRATICIENS[active].online ? '#4caf50' : 'var(--gray-mid)', borderRadius: '50%', display: 'inline-block' }} />
                    {PRATICIENS[active].online ? 'En ligne' : 'Hors ligne'}
                  </div>
                </div>

                <div className="chat-messages">
                  {messages.map((m, i) => (
                    <div key={i} className={`msg ${m.sent ? 'sent' : 'received'}`}>
                      {!m.sent && <div className="msg-avatar">{PRATICIENS[active].initials}</div>}
                      <div>
                        <div className="msg-bubble">{m.text}</div>
                        <div className="msg-time">{m.time}</div>
                      </div>
                      {m.sent && <div className="msg-avatar" style={{ background: 'var(--green-light)' }}>M</div>}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-bar">
                  <input
                    type="text"
                    placeholder="Écrivez votre message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                  />
                  <button className="btn-send" onClick={send}>➤</button>
                </div>
              </div>
            </div>
          </FadeIn>

          <div style={{ marginTop: '3rem' }}>
            <FadeIn>
              <div className="section-header">
                <div className="tag">Experts disponibles</div>
                <h2>Nos tradipraticiens</h2>
                <p>Choisissez un expert selon votre besoin de santé.</p>
              </div>
            </FadeIn>
            <div className="grid-4">
              {PRATICIENS.slice(0, 4).map((p, i) => (
                <FadeIn key={p.name} delay={i * 100}>
                  <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div className="avatar" style={{ width: 64, height: 64, fontSize: '1.3rem', margin: '0 auto 0.8rem' }}>{p.initials}</div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--green-dark)' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', margin: '0.2rem 0 0.6rem' }}>{p.spec}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontSize: '0.8rem', color: p.online ? '#4caf50' : 'var(--gray-mid)', marginBottom: '0.8rem', fontWeight: 600 }}>
                      <span style={{ width: 7, height: 7, background: p.online ? '#4caf50' : 'var(--gray-mid)', borderRadius: '50%', display: 'inline-block' }} />
                      {p.online ? 'En ligne' : 'Hors ligne'}
                    </div>
                    <button className={`btn ${p.online ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.4rem 1rem', fontSize: '0.82rem' }} onClick={() => setActive(i)}>
                      Contacter
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
