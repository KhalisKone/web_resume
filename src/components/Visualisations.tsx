import React from "react";

const Visualisations: React.FC = () => {
  return (
    <section>
      <h2>Visualisations</h2>
      <ul>
        <li>Heatmap des corrélations entre variables</li>
        <li>Scatter plots des prédictions vs valeurs réelles</li>
        <li>Matrice de confusion pour la classification</li>
        <li>Scatter plot des anomalies détectées</li>
      </ul>
      <p>
        Les graphiques illustrent la qualité des modèles et la pertinence des détections. (Pour la version web, utilisez des librairies comme <b>recharts</b> ou <b>chart.js</b> pour intégrer des visualisations dynamiques.)
      </p>
    </section>
  );
};

export default Visualisations;
