import React from "react";

const Conseils: React.FC = () => {
  return (
    <section>
      <h2>Conseils & Pistes d'Amélioration</h2>
      <ul>
        <li>Documenter chaque étape et justifier les choix d'algorithmes.</li>
        <li>Mettre en avant la robustesse du pipeline (gestion des erreurs, adaptation automatique aux colonnes, visualisations claires).</li>
        <li>Proposer des axes d'amélioration : ajout de features, tuning, validation croisée, monitoring temps réel.</li>
        <li>Intégrer des alertes automatiques en cas d'anomalie critique.</li>
        <li>Envisager l'intégration d'API ou de dashboards pour l'industrialisation.</li>
      </ul>
      <p>
        Ce pipeline est prêt pour la production et l'optimisation continue d'un jardin connecté intelligent.
      </p>
    </section>
  );
};

export default Conseils;
