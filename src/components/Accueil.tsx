import React from "react";

const Accueil: React.FC = () => {
  return (
    <section className="accueil-section">
      <div className="hero">
        <img src="/logoA.png" alt="Logo AgriWater" className="hero-logo" />
        <div className="hero-text">
          <h2>Bienvenue sur AgriWater</h2>
          <p className="hero-desc">
            <strong>AgriWater</strong> est un projet de jardin connecté intelligent, combinant IoT, Machine Learning et Data Science pour optimiser l’arrosage et la santé des plantes.<br />
            Ce site vous propose une immersion dans l’analyse complète du système, de la collecte des données à la détection d’anomalies, en passant par la prédiction et la visualisation.
          </p>
        </div>
      </div>
      <div className="pipeline">
        <h3>Pipeline d’Analyse</h3>
        <div className="pipeline-steps">
          <div className="step">1. Exploration & Validation des données</div>
          <div className="step">2. Prétraitement robuste</div>
          <div className="step">3. Prédiction intelligente (régression, classification)</div>
          <div className="step">4. Segmentation temporelle (KMeans)</div>
          <div className="step">5. Détection d’anomalies (IsolationForest)</div>
          <div className="step">6. Visualisations & Interprétations</div>
        </div>
      </div>
      <div className="project-highlights">
        <h3>Points Forts du Projet</h3>
        <ul>
          <li>Robustesse face aux variations de données</li>
          <li>Visualisations claires et impactantes</li>
          <li>Détection automatique des anomalies</li>
          <li>Pipeline prêt pour la production ou la compétition</li>
          <li>Ouverture vers l’industrialisation (API, dashboard, alertes…)</li>
        </ul>
      </div>
      <div className="cta">
        <p>Explorez le menu pour découvrir chaque aspect de l’analyse, les résultats, et les conseils pour aller plus loin !</p>
      </div>
    </section>
  );
};

export default Accueil;
