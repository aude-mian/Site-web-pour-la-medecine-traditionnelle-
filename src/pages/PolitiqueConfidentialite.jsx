import FadeIn from '../components/FadeIn';
import PageHero from '../components/PageHero';

const SECTIONS = [
  {
    num: '01',
    title: 'Collecte des données',
    text: 'MedTrad collecte uniquement les données nécessaires au bon fonctionnement de la plateforme : nom, adresse email, et préférences de navigation. Ces informations sont recueillies lors de votre inscription ou de votre utilisation des services.',
  },
  {
    num: '02',
    title: 'Utilisation des données',
    text: 'Vos données sont utilisées exclusivement pour personnaliser votre expérience, vous envoyer des notifications relatives à votre compte et améliorer nos services. Nous ne vendons jamais vos données à des tiers.',
  },
  {
    num: '03',
    title: 'Cookies',
    text: 'Nous utilisons des cookies techniques indispensables au fonctionnement du site et des cookies analytiques anonymisés pour comprendre l\'usage de la plateforme. Vous pouvez les désactiver dans les paramètres de votre navigateur.',
  },
  {
    num: '04',
    title: 'Partage des données',
    text: 'Aucune donnée personnelle n\'est partagée avec des tiers sans votre consentement explicite, sauf obligation légale. Les tradipraticiens avec lesquels vous interagissez n\'ont accès qu\'aux informations que vous choisissez de partager lors d\'une conversation.',
  },
  {
    num: '05',
    title: 'Sécurité',
    text: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction : chiffrement HTTPS, accès restreint aux bases de données, sauvegardes régulières.',
  },
  {
    num: '06',
    title: 'Vos droits',
    text: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@medtrad.com. Nous nous engageons à répondre dans un délai de 30 jours.',
  },
  {
    num: '07',
    title: 'Durée de conservation',
    text: 'Vos données sont conservées pendant la durée de votre compte actif, puis supprimées dans un délai de 90 jours après la fermeture du compte, sauf obligation légale de conservation plus longue.',
  },
  {
    num: '08',
    title: 'Modifications',
    text: 'Cette politique peut être mise à jour ponctuellement. En cas de modification substantielle, nous vous en informerons par email et par une notification visible sur la plateforme. La date de dernière mise à jour est indiquée en bas de cette page.',
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        subtitle="Nous respectons votre vie privée. Découvrez comment nous collectons, utilisons et protégeons vos données."
        breadcrumb="Politique de confidentialité"
      />

      <section className="section">
        <div className="container">
          <div className="politique-header">
            <FadeIn>
              <div className="politique-intro">
                <div className="tag" style={{ marginBottom: '0.8rem' }}>Dernière mise à jour : Mars 2026</div>
                <h2>Notre engagement envers votre vie privée</h2>
                <p>
                  Chez MedTrad, la protection de vos données personnelles est une priorité. Cette politique
                  décrit de manière transparente les informations que nous collectons et la façon dont nous les utilisons.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="timeline-blocks" style={{ marginTop: '3rem' }}>
            {SECTIONS.map(({ num, title, text }, i) => (
              <FadeIn key={num} delay={i * 100}>
                <div className="timeline-block">
                  <div className="timeline-num">{num}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="politique-footer-note">
              Pour toute question relative à cette politique, contactez-nous à{' '}
              <a href="mailto:contact@medtrad.com">contact@medtrad.com</a>.
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
