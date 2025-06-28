import React from "react";

const Accueil: React.FC = () => {
  return (
    <section>
      <h2>Bienvenue</h2>
      <p>
        Ce site web résume l'analyse avancée d'un projet de jardin connecté, basée sur un notebook Python complet.<br />
        Vous trouverez ici les grandes étapes du pipeline de données, les méthodes utilisées, les résultats clés et des conseils pour la compétition ou la production.
      </p>
      <ul>
        <li>Exploration et validation des données</li>
        <li>Prétraitement robuste et sélection automatique des features</li>
        <li>Prédiction (régression, classification)</li>
        <li>Segmentation temporelle</li>
        <li>Détection d'anomalies</li>
        <li>Visualisations et interprétations</li>
      </ul>
      <p>
        Naviguez via le menu pour découvrir chaque aspect de l'analyse !
      </p>
    </section>
  );
};

export default Accueil;
