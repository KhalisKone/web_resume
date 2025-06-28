import React from "react";

const Resultats: React.FC = () => {
  return (
    <section>
      <h2>Résultats Clés</h2>
      <ul>
        <li>
          <strong>Prédiction du niveau d'eau :</strong> Les modèles de régression linéaire et forêt aléatoire permettent d'estimer précisément le niveau d'eau, la forêt aléatoire étant plus robuste aux non-linéarités.
        </li>
        <li>
          <strong>Classification du moment de la journée :</strong> KMeans segmente efficacement les moments (matin, midi, soir), et la classification supervise l'automatisation de cette reconnaissance.
        </li>
        <li>
          <strong>Détection d'anomalies :</strong> IsolationForest identifie les mesures atypiques, utiles pour la maintenance et la fiabilité du système.
        </li>
      </ul>
      <p>
        Les résultats montrent la pertinence des algorithmes choisis pour un système de jardin connecté intelligent.
      </p>
    </section>
  );
};

export default Resultats;
