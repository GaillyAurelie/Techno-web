import "./PersonnalCV.css";

export default function PersonnalCV() {
  return (
    <div className="cv-container">
      <div className="cv-title">
        <h1>Mon curriculum vitae</h1>
        <p>Étudiante ingénieure industrielle</p>
      </div>

      <div className="cv-content">
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>Informations personnelles</h2>
            <p>
              <strong>Nom :</strong> Gailly Aurélie
            </p>
            <p>
              <strong>Âge :</strong> 22 ans
            </p>
            <p>
              <strong>Email :</strong> 24164@ecam.be
            </p>
          </section>

          <section className="cv-section">
            <h2>Compétences</h2>
            <p> Anglais : B2</p>
            <p> Néerlandais : B1</p>
          </section>
        </aside>

        <main className="cv-main">
          <section className="cv-section">
            <h2>🎓 Formation</h2>

            <div className="cv-item">
              <h3>2024 - Aujourd'hui</h3>
              <p>Formation d'ingénieur industriel à ECAM</p>
              <small>3ème année de bachelier</small>
            </div>

            <div className="cv-item">
              <h3>2023 - 2024</h3>
              <p>Première année de Polytechnique</p>
            </div>

            <div className="cv-item">
              <h3>2022 - 2023</h3>
              <p>Année préparatoire à Polytechnique</p>
            </div>

            <div className="cv-item">
              <h3>Juin 2022</h3>
              <p>CESS option mathématiques (6h)</p>
            </div>
          </section>

          <section className="cv-section">
            <h2>💼 Expériences</h2>

            <div className="cv-item">
              <h3>Job étudiant</h3>
              <p>Serveuse en brasserie</p>
            </div>

            <div className="cv-item">
              <h3>Projets académiques</h3>
              <p>Réalisation de projets dans le cadre des cours</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
