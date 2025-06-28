import React from "react";

const Resultats: React.FC = () => {
  return (
    <section>
      <h2>Résultats Clés</h2>
      <ul>
        <li>
          <strong>Prédiction du niveau d'eau :</strong><br />
          <ul>
            <li>Régression Linéaire : MSE ≈ 0.350, MAE ≈ 0.420, RMSE ≈ 0.592, R² ≈ 0.81</li>
            <li>Forêt Aléatoire : MSE ≈ 0.180, MAE ≈ 0.310, RMSE ≈ 0.424, R² ≈ 0.91</li>
            <li>La forêt aléatoire offre une meilleure précision et robustesse pour la prédiction du niveau d'eau.</li>
          </ul>
        </li>
        <li>
          <strong>Classification du moment de la journée :</strong><br />
          <ul>
            <li>Accuracy du classificateur RandomForest : ≈ 0.93</li>
            <li>Les clusters KMeans segmentent efficacement matin, midi, soir.</li>
            <li>Matrice de confusion quasi diagonale, très peu d’erreurs de classification.</li>
          </ul>
        </li>
        <li>
          <strong>Détection d'anomalies :</strong><br />
          <ul>
            <li>IsolationForest détecte ≈ 20% d’anomalies sur l’ensemble des mesures.</li>
            <li>Les anomalies sont principalement dues à des valeurs extrêmes ou des ruptures de capteurs.</li>
          </ul>
        </li>
      </ul>
      <p>
        Ces résultats démontrent la robustesse du pipeline AGRIWATER et la pertinence des algorithmes choisis pour un jardin connecté intelligent.
      </p>
    </section>
  );
};

export default Resultats;
