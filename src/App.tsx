import React, { useState } from "react";
import './index.css';
import Accueil from "./components/Accueil";
import Methodologie from "./components/Methodologie";
import Resultats from "./components/Resultats";
import Visualisations from "./components/Visualisations";
import Conseils from "./components/Conseils";

const App: React.FC = () => {
  const [page, setPage] = useState<string>("accueil");

  return (
    <div className="App">
      <div className="banner">
        <img src="/logo.jpeg" alt="Logo Jardin Connecté" className="logo-main" />
        <div className="banner-text">
          <h1>AgriWater – Jardin Connecté Intelligent</h1>
          <p className="subtitle">Analyse avancée, IA & Data Science pour l’optimisation de l’arrosage</p>
        </div>
      </div>

      <nav className="main-nav">
        <button onClick={() => setPage("accueil")}>Accueil</button>
        <button onClick={() => setPage("methodo")}>Méthodologie</button>
        <button onClick={() => setPage("resultats")}>Résultats</button>
        <button onClick={() => setPage("visualisations")}>Visualisations</button>
        <button onClick={() => setPage("conseils")}>Conseils</button>
      </nav>

      <section className="downloads">
        <h3>Téléchargements</h3>
        <div className="download-links">
          <a href="https://expo.dev/artifacts/eas/w9Jqp9S8iLWGbS7K7YjTPs.apk" className="download-btn" download>APK Application</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1qXYFz6RMVOPU1_vwacIgO4R8zKAiPhlS"
            className="download-btn"
            download
          >
            Vidéo Démo
          </a>
          <a href="/rapport_analyse_jardin.ipynb" className="download-btn" download>Notebook Analyse</a>
          <a href="/Rapport_ML.pdf" className="download-btn" download>Rapport PDF</a>
          <a href="https://jardin.tiiny.site/jardin_historique_complet.csv" className="download-btn" download>Base de données CSV</a>
        </div>
      </section>

      <main>
        {page === "accueil" && <Accueil />}
        {page === "methodo" && <Methodologie />}
        {page === "resultats" && <Resultats />}
        {page === "visualisations" && <Visualisations />}
        {page === "conseils" && <Conseils />}
      </main>

      <footer>
        <p>© 2025 AgriWater – Projet Jardin Connecté | Design by AGRIWATER</p>
      </footer>
    </div>
  );
};

export default App;
