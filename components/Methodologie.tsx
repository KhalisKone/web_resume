import React from "react";

const Methodologie: React.FC = () => {
  return (
    <section>
      <h2>Méthodologie</h2>
      <ol>
        <li>
          <strong>Chargement et validation du CSV :</strong> Vérification des colonnes, gestion des erreurs d'import, adaptation automatique aux variations du fichier utilisateur.
        </li>
        <li>
          <strong>Prétraitement centralisé :</strong> Conversion des colonnes Oui/Non en 1/0, gestion des valeurs manquantes, sélection automatique des features pertinentes.
        </li>
        <li>
          <strong>Prédiction :</strong> Utilisation de la régression linéaire et de la forêt aléatoire pour prédire le niveau d'eau, RandomForest pour l'humidité et la classification du sol sec.
        </li>
        <li>
          <strong>Segmentation temporelle :</strong> KMeans pour segmenter les moments de la journée (matin, midi, soir), puis classification supervisée.
        </li>
        <li>
          <strong>Détection d'anomalies :</strong> IsolationForest pour repérer les mesures atypiques ou erreurs de capteurs.
        </li>
      </ol>
      <p>
        Chaque étape est automatisée et robuste, fidèle à la logique du backend Python.
      </p>
    </section>
  );
};

export default Methodologie;
